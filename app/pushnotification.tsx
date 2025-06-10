import { GraphQLResult } from '@aws-amplify/api-graphql';
import { API, Auth } from 'aws-amplify';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { deletePushToken } from '../src/graphql/mutations';
import { listPushTokens } from '../src/graphql/queries';

type PushToken = {
  id: string;
  token: string;
};

type ListPushTokensResponse = {
  listPushTokens: {
    items: PushToken[];
  };
};

export default function PushNotification() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isSending, setIsSending] = useState(false);

  const EXPO_PUSH_URL = 'https://exp.host/--/api/v2/push/send';

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
                  <Text>You do not have permission to send notifications.</Text>
              </View>
          );
      }

  // Function to retrieve all push tokens
  async function getAllPushTokens(): Promise<PushToken[]> {
    try {
      const response = (await API.graphql({
        query: listPushTokens,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as GraphQLResult<ListPushTokensResponse>;

      if (response.data?.listPushTokens?.items) {
        const tokens = response.data.listPushTokens.items.map((item) => ({
          id: item.id,
          token: item.token,
        }));
        console.log('Retrieved push tokens:', tokens);
        return tokens;
      } else {
        console.error('No push tokens found.');
        return [];
      }
    } catch (error) {
      console.error('Error retrieving push tokens:', error);
      Alert.alert('Error', 'Failed to retrieve push tokens.');
      return [];
    }
  }

  // Function to send notifications to all users
  async function sendNotificationToAllUsers() {
    if (!title || !body) {
      Alert.alert('Error', 'Please provide both a title and a body for the notification.');
      return;
    }

    setIsSending(true); // Show loading state
    try {
      const tokens = await getAllPushTokens();

      for (const { id, token } of tokens) {
        const message = {
          to: token,
          sound: 'default',
          title: title,
          body: body,
        };

        try {
          const response = await fetch(EXPO_PUSH_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(message),
          });
          console.log(message);
          const result = await response.json();
          console.log('Expo Push API Response:', result);

          // Check if the token is invalid
          if (result.data?.status === 'error' && result.data?.details?.error === 'DeviceNotRegistered') {
            console.log(`Removing invalid token: ${token}`);
            try {
                console.log(`Attempting to delete token with id: ${id}`);
                await API.graphql({
                    query: deletePushToken,
                    variables: { input: { id } }, // Ensure the input object contains the id
                    authMode: 'AMAZON_COGNITO_USER_POOLS', // Specify the auth mode
                });
                console.log(`Successfully deleted token with id: ${id}`);
            } catch (error) {
                console.error(`Error deleting token ${token}:`, error);
            }
          }
        } catch (error) {
          console.error(`Error sending notification to token ${token}:`, error);
        }
      }

      Alert.alert('Success', 'Notifications sent successfully.');
    } catch (error) {
      console.error('Error sending notifications:', error);
      Alert.alert('Error', 'Failed to send notifications.');
    } finally {
      setIsSending(false); // Hide loading state
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Send Push Notification</Text>

      <TextInput
        style={styles.input}
        placeholder="Notification Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Notification Body"
        value={body}
        onChangeText={setBody}
        multiline
      />

      <Button
        title={isSending ? 'Sending...' : 'Send Notification'}
        onPress={sendNotificationToAllUsers}
        disabled={isSending}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});