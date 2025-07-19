import { Auth } from 'aws-amplify';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Banner from '../components/Banner';

function SignInScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [isNewPasswordRequired, setIsNewPasswordRequired] = useState(false);
    const [user, setUser] = useState(null);
    const [showOptions, setShowOptions] = useState(false); // State to show navigation options

    const router = useRouter();

    const handleSignIn = async () => {
        try {
            const user = await Auth.signIn(username, password);
            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                setIsNewPasswordRequired(true);
                setUser(user);
            } else {
                const authenticatedUser = await Auth.currentAuthenticatedUser();
                console.log('Authenticated user:', authenticatedUser);
                setShowOptions(true); // Show navigation options after successful sign-in
            }
        } catch (err) {
            console.error('Error during sign-in:', err);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred.');
            }
        }
    };

    const handleNewPasswordSubmit = async () => {
        try {
            await Auth.completeNewPassword(user, newPassword);
            const authenticatedUser = await Auth.currentAuthenticatedUser();
            console.log('Authenticated user:', authenticatedUser);
            setShowOptions(true); // Show navigation options after successful password change
        } catch (err) {
            console.error('Error during password change:', err);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred.');
            }
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Banner />
            <Text style={styles.welcomeText}>Sign In</Text>

            {!showOptions ? (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        editable={!isNewPasswordRequired}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        editable={!isNewPasswordRequired}
                    />
                    {isNewPasswordRequired && (
                        <TextInput
                            style={styles.input}
                            placeholder="New Password"
                            value={newPassword}
                            onChangeText={setNewPassword}
                            secureTextEntry
                        />
                    )}
                    {error && <Text style={styles.error}>{error}</Text>}
                    {!isNewPasswordRequired ? (
                        <Button title="Sign In" onPress={handleSignIn} color="#00274C" />
                    ) : (
                        <Button title="Submit New Password" onPress={handleNewPasswordSubmit} />
                    )}
                </>
            ) : (
                // Show navigation options after successful sign-in
                <View style={styles.optionsContainer}>
                    <Text style={styles.optionsText}>Operations</Text>
                    <Button
                        title="Send Notification"
                        onPress={() => router.navigate('/pushnotification')}
                        color="#00274C"
                    />
                    <Button
                        title="Upload Recipe"
                        onPress={() => router.navigate('/uploadimage')}
                        color="#00274C"
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    welcomeText: {
        color: '#00274C',
        fontFamily: "Montserrat_700Bold",
        fontSize: 24,
        marginTop: 35,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 11,
        marginBottom: 10,
        padding: 10,
        width: '84.6%',
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    optionsContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    optionsText: {
        fontSize: 18,
        marginBottom: 20,
        color: '#00274C',
    },
});

export default SignInScreen;