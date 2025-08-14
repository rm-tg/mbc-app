import { API, Auth, Storage } from 'aws-amplify';
import * as ImagePicker from 'expo-image-picker';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { createPublicData } from '../src/graphql/mutations';

function UploadImage() {
    const [image, setImage] = useState<string | null>(null);
    const [imageId, setImageId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // New fields for recipe details
    const [tags, setTags] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [servingSize, setServingSize] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [prepSteps, setPrepSteps] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Check if user is in the Admin group
        const checkUserGroup = async () => {
            const user = await Auth.currentAuthenticatedUser();
            const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
            if (groups && groups.includes("Admin")) {
                setIsAdmin(true);
            }
        };
        checkUserGroup();
    }, []);

    if (!isAdmin) {
        return (
            <View style={styles.container}>
                <Text>You do not have permission to upload images.</Text>
            </View>
        );
    }

    // Pick an image from the user's device
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
    };

    // Upload the image to S3 and save recipe data
    const uploadImage = async () => {
        if (image) {
            try {
                const response = await fetch(image);
                const blob = await response.blob();
                const fileName = `${Date.now()}-${image.split('/').pop()}`;
                await Storage.put(fileName, blob, {
                    contentType: 'image/jpeg',
                });
                setImageId(fileName); // Store the image ID instead of URL
                await saveImageId(fileName); // Save the image ID and recipe data
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    // Save recipe data to backend
    const saveImageId = async (imageId: string) => {
        const input = {
            title,
            description,
            image: imageId, // Save the image ID
            tags: tags.split('\n').map(tag => tag.trim()).filter(tag => tag.length > 0),
            cookTime: cookTime ? parseInt(cookTime, 10) : undefined,
            servingSize: servingSize ? parseInt(servingSize, 10) : undefined,
            ingredients: ingredients.split('\n').map(i => i.trim()).filter(i => i.length > 0),
            prepSteps: prepSteps.split('\n').map(s => s.trim()).filter(s => s.length > 0),
        };
        try {
            await API.graphql({
                query: createPublicData,
                variables: { input },
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
        } catch (error) {
            console.error('Error saving image data:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            {/* Each tag on a new line */}
            <TextInput
                style={[styles.input, styles.multiline]}
                placeholder="Tags (one per line)"
                value={tags}
                onChangeText={setTags}
                multiline
            />
            <TextInput
                style={styles.input}
                placeholder="Cook Time (minutes)"
                value={cookTime}
                onChangeText={setCookTime}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Serving Size"
                value={servingSize}
                onChangeText={setServingSize}
                keyboardType="numeric"
            />
            {/* Each ingredient on a new line */}
            <TextInput
                style={[styles.input, styles.multiline]}
                placeholder="Ingredients (one per line)"
                value={ingredients}
                onChangeText={setIngredients}
                multiline
            />
            {/* Each prep step on a new line */}
            <TextInput
                style={[styles.input, styles.multiline]}
                placeholder="Preparation Steps (one per line)"
                value={prepSteps}
                onChangeText={setPrepSteps}
                multiline
            />
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Upload Recipe" onPress={uploadImage} />
            {imageId && <Text>Image ID: {imageId}</Text>} {/* Display the image ID */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '80%',
        backgroundColor: '#fff',
    },
    multiline: {
        height: 80,
        textAlignVertical: 'top',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
});

export default UploadImage;