import MenuBar from '@/components/MenuBar';
import { API, graphqlOperation } from 'aws-amplify';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Banner from '../components/Banner';
import { createPushToken } from '../src/graphql/mutations';

export default function HomeScreen() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const router = useRouter();

  async function registerForPushNotificationsAsync() {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission not granted');
        return;
      }

      const projectId = Constants.expoConfig?.projectId; // Access projectId from app.json
      if (!projectId) {
        throw new Error('No projectId found in app.json');
      }

      const token = (await Notifications.getExpoPushTokenAsync({ projectId })).data; // Pass projectId dynamically
      setExpoPushToken(token);
      console.log('Expo Push Token:', token);
      try {
        await API.graphql(graphqlOperation(createPushToken, { input: { token } }));
        console.log('Push token saved successfully');
      } catch (error) {
        console.error('Error saving push token:', error);
        Alert.alert(
          'Error saving push token',
          error instanceof Error ? error.message : String(error)
        );
      }
    } catch (error) {
      console.error('Error getting push token:', error);
      Alert.alert(
        'Error getting push token',
        error instanceof Error ? error.message : String(error)
      );
    }
  }

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <StatusBar hidden />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          backgroundColor: 'rgba(0,0,0,0.01)',
          zIndex: 10, // ensure it's on top
        }}
        onPress={() => router.push('/signin')}
      />
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 100, }} // Add this line
      > 
        <Banner />
        <Text style={styles.welcomeText}>
          Welcome to the Maize {'\n'}
          & Blue Cupboard! 
        </Text>

        <Image
          source={require("../assets/homescreen-food.png")}
          style={styles.image} />

        {/* Schedule Visit button */}
        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={() => router.push('/appointments')}
          activeOpacity={0.7}
        >
          <Text style={styles.scheduleButtonText}>Schedule Visit</Text>
        </TouchableOpacity>

        {/* Blue menu buttons */}
        <View style={styles.menuContainer}>
          {/* First row */}
          <View style={styles.menuRow}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/about')}
              activeOpacity={0.7}
            >
              <Image
                source={require('../assets/about-menu.png')}
                style={styles.menuItemIcon}
              />
              <Text style={styles.menuItemText}>About</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/volunteering')}
              activeOpacity={0.7}
            >
              <Image
                source={require('../assets/how-to-help-menu.png')}
                style={styles.menuItemIcon}
              />
              <Text style={styles.menuItemText}>How to Help</Text>
            </TouchableOpacity>
          </View>
          
          {/* Second row */}
          <View style={styles.menuRow}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/recipes')}
              activeOpacity={0.7}
            >
              <Image
                source={require('../assets/recipes-menu.png')}
                style={styles.menuItemIcon}
              />
              <Text style={styles.menuItemText}>Recipes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/snapinfo')}
              activeOpacity={0.7}
            >
              <Image
                source={require('../assets/food-assistance-menu.png')}
                style={styles.menuItemIcon}
              />
              <Text style={styles.menuItemText}>Food{'\n'}Assistance</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Enable Notifications" onPress={registerForPushNotificationsAsync} />
        {expoPushToken ? <Text style={{marginBottom: 20, marginLeft: 30}}>Your Push Token: {expoPushToken}</Text> : null}
      </ScrollView>
      <View>
        <MenuBar/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeText: {
    color: '#00274C',
    fontFamily: "Montserrat_700Bold",
    fontSize: 26,
    height: 64,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 3,
  },
  image: {
    width: '67.7%',// need this line, otherwise the image will not scale properly
    aspectRatio: 264 / 225.83,
    resizeMode: 'contain',
    height: undefined, // This is important to maintain aspect ratio
  },
  scheduleButton: {
    backgroundColor: '#FFCB05',
    width: '90%', // 351 / 390
    paddingVertical: 21,
    marginTop: -7,
    borderRadius: 18,
    alignItems: 'center',

    // Drop shadow
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,  // 30% opacity
    shadowRadius: 4,     // 4px blur
    elevation: 4,        // Android equivalent
  },
  scheduleButtonText: {
    fontSize: 30,
    fontFamily: "Montserrat_700Bold",
    color: '#00274C',
  },
  menuContainer: {
    width: '90%',
    marginTop: 12,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  menuItem: {
    width: '48.4%',
    maxHeight: 123,
    aspectRatio: 170/123,
    backgroundColor: '#00274C',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',

    // Drop shadow
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,  // 30% opacity
    shadowRadius: 4,     // 4px blur
    elevation: 4,        // Android equivalent
  },
  menuItemText: {
    color: 'white',
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    textAlign: 'center',
    marginTop: 8,
  },
  menuItemIcon: {
    width: 40,
    height: 40,
  },
});

