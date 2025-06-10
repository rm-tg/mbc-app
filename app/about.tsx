import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banner from '../components/Banner';

export default function AboutScreen() {

  return (
      <View style={styles.mainContainer}>
        <Banner/>
          <Text style={styles.welcomeText}>
              this is about screen
          </Text>
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
      color: "black", 
      fontFamily: "Avenir Next",
      fontWeight: "700", 
      fontSize: 30, 
      alignSelf: 'flex-start',
      marginLeft: 30,
    },
    imageContainer: {
      backgroundColor: '#D9E0F3',
      width: "90%", 
      height: "20%", 
      borderRadius: 20,
      overflow: 'hidden',
      padding: 10,
      marginBottom: 20,
      alignItems: 'center', // Center horizontally
      justifyContent: 'center'
    },
    image: {
      width: "100%", // Make the image take full width
      height: "100%", // Make the image take full height
      resizeMode: "contain",
    },
    gridsContainer: {
      backgroundColor: "White",
      width: "70%", 
      height: "12%", 
      borderColor: "Black",
      borderWidth: 1,
      borderRadius: 20,
      marginBottom: 20,
      alignItems: 'center', // Center horizontally
      justifyContent: 'center'
    }
  });