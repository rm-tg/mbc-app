import { API, Auth, Storage } from 'aws-amplify';
import * as ImagePicker from 'expo-image-picker';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { createPublicData } from '../src/graphql/mutations';

function UploadImage() {
    const [image, setImage] = useState<string | null>(null);
    const [imageId, setImageId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
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

    const pickImage = async () => {
        // Request permission to access the camera roll
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        // Launch the image picker
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
                await saveImageId(fileName); // Save the image ID
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const saveImageId = async (imageId: string) => {
        const input = {
            title,
            description,
            image: imageId, // Save the image ID
        };
        try {
            const result = await API.graphql({
                query: createPublicData,
                variables: { input },
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
        } catch (error) {
            console.error('Error saving image data:', error);
        }
    };

    return (
        <View style={styles.container}>
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
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Upload Image" onPress={uploadImage} />
            {imageId && <Text>Image ID: {imageId}</Text>} {/* Display the image ID */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '80%',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
});

export default UploadImage;