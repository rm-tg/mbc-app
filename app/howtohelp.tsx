import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Banner from '../components/Banner';
import HomeButton from '../components/HomeButton';

function HowToHelpScreen() {
  const router = useRouter();

  return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.mainContainer} >
          <Banner/>
          <HomeButton/>
          <View style={styles.content}>
            <Text style={styles.heading}>
              How to Help
            </Text>
            <Text style={styles.bodyText}>
              {'\n'}
              Thank you for supporting our mission to
              ensure that no one goes without at U-M. 
            </Text>
            <View style={styles.howToHelpMainButton}>
              <Text style={styles.buttonTextLeft}>
                {'\n'}
                VOLUNTEER AT PANTRY
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center',
                paddingBottom: 5.5, paddingTop: 9.5,}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#00274C',}}/>
              </View>
              <View style={{flexDirection: 'row',}}/>
                <Text style={styles.bodyTextLeftAlign}>
                  Interested in being a volunteer?
                  Anyone can help, no experience is
                  necessary, and you can sign up for a
                  shift that works with your schedule.
                </Text>
                <TouchableOpacity style={styles.homeButton} onPress={() => router.navigate('/about')}>
                  <Image
                      source={require('../assets/howToHelp/right-arrow.png')}
                      style={styles.rightArrowImg}
                      resizeMode="contain"
                  />
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      alignItems: 'center',
      paddingBottom: 80,
    },
    headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    marginLeft: 8,
    marginBottom: 21,
    },
    homeButton: {
    flexDirection: 'row',
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
    },
    heading: {
      fontSize: 24,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      marginTop: 28,
      marginBottom: 11,
    },
    bodyText: {
      fontSize: 16,
      fontFamily: "Montserrat_500Regular",
      color: '#000000',
      width: '91.03%',
      textAlign: 'center',
    },
    bodyTextLeftAlign: {
      fontSize: 16,
      fontFamily: "Montserrat_500Medium",
      color: '#000000',
      width: '91.03%',
      textAlign: 'left',
    },
    howToHelpMainButton: {
      backgroundColor: '#F2F2F2',
      top: 27,
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: '5.13%',
      marginBottom: 14,
      width: '93.85%',
      height: 170,
      flexDirection: 'column',
    },
    buttonTextLeft: {
      fontSize: 16,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      textAlign: 'left',
    },
      rightArrowImg: {
      width: 24,
      height: 24,
    },
  });

export default HowToHelpScreen