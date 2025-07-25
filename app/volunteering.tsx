import MenuBar from '@/components/MenuBar';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Banner from '../components/Banner';

function VolunteeringScreen() {

return (
    <View style={styles.mainContainer}>
      <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{ alignItems: 'center', paddingBottom: 100, }}
      >
        <Banner/>
        <Text style={styles.welcomeText}>
            this is volunteering screen
        </Text>
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

export default VolunteeringScreen