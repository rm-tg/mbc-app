import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
                VOLUNTEER AT PANTRY
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center',
                paddingBottom: 5.5, paddingTop: 9.5, paddingRight: 55}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#00274C',}}/>
              </View>
              <View style={{flexDirection: 'row',}}>
                <Text style={styles.bodyTextLeftAlign}>
                  Interested in being a volunteer?
                  Anyone can help, no experience is
                  necessary, and you can sign up for a
                  shift that works with your schedule.
                </Text>
                <TouchableOpacity style={styles.nextButton} onPress={() => router.navigate('/about')}>
                  <View style={styles.circle}>
                    <Image
                        source={require('../assets/howToHelp/right-arrow.png')}
                        style={styles.rightArrowImg}
                        resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.howToHelpMainButton}>
              <Text style={styles.buttonTextLeft}>
                DONATE
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center',
                paddingBottom: 5.5, paddingTop: 9.5, paddingRight: 55}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#00274C',}}/>
              </View>
              <View style={{flexDirection: 'row',}}>
                <Text style={styles.bodyTextLeftAlign}>
                  Interested in donating money and/or
                  goods to the pantry? See how your
                  donations can make an impact. 
                </Text>
                <TouchableOpacity style={styles.nextButton} onPress={() => router.navigate('/about')}>
                  <View style={styles.circle}>
                    <Image
                        source={require('../assets/howToHelp/right-arrow.png')}
                        style={styles.rightArrowImg}
                        resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.howToHelpMainButton}>
              <Text style={styles.buttonTextLeft}>
                HOST A DRIVE
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center',
                paddingBottom: 5.5, paddingTop: 9.5, paddingRight: 55}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#00274C',}}/>
              </View>
              <View style={{flexDirection: 'row',}}>
                <Text style={styles.bodyTextLeftAlign}>
                  Interested in hosting a donation drive
                  with a team? Schedule a time and find
                  out what goods we can accept. 
                </Text>
                <TouchableOpacity style={styles.nextButton} onPress={() => router.navigate('/about')}>
                  <View style={styles.circle}>
                    <Image
                        source={require('../assets/howToHelp/right-arrow.png')}
                        style={styles.rightArrowImg}
                        resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.bottomParagraph}>
                The Maize and Blue Cupboard utilizes volunteers
                on a regular basis. If your group is interested in
                volunteering at the Cupboard, please contact us
                at 
                  <Text style={styles.mailLink} onPress={() => Linking.openURL('mailto:maize.blue.cupboard@umich.edu')}>
                    {' '}
                    maize.blue.cupboard@umich.edu
                  </Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('mailto:maize.blue.cupboard@umich.edu')}>
                <Text style={styles.contactText}>
                  Contact Us
                </Text>
            </TouchableOpacity>
            <Image
              style={styles.mbcSignature}
              source={require('../assets/mbc-signature-horizontal.png')}
            />
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
    nextButton: {
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
    image: {
      width: "100%", // Make the image take full width
      height: "100%", // Make the image take full height
      resizeMode: "contain",
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
      fontSize: 13,
      fontFamily: "Montserrat_500Medium",
      color: '#000000',
      width: '91.03%',
      textAlign: 'left',
      paddingRight: 20
    },
    bottomParagraph: {
      textAlign: 'center',
      fontSize: 13,
      fontFamily: "Montserrat_500Medium",
      paddingTop: 27,
      paddingHorizontal: 43,
      paddingBottom: 20,
    },
    mailLink: {
      textAlign: 'center',
      fontSize: 13,
      fontFamily: "Montserrat_500Medium",
      paddingTop: 27,
      paddingHorizontal: 40,
      color: 'blue',
      textDecorationLine: 'underline',
    },
    howToHelpMainButton: {
      backgroundColor: '#F2F2F2',
      top: 27,
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 14,
      width: '85%',
      height: 135,
      flexDirection: 'column',
    },
    buttonTextLeft: {
      fontSize: 16,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      textAlign: 'left',
      paddingTop: 7
    },
    contactText: {
      color: '#FFFFFF',
      fontFamily: "Montserrat_600",
      textAlign: 'center',

    },
    rightArrowImg: {
      width: 18,
      height: 18,
    },
    circle: {
      width: 23,  // Set a desired width
      height: 23, // Set height equal to width
      borderRadius: 11.5, // Half of the width/height
      backgroundColor: '#00274C', // Optional: Set a background color
      paddingVertical: 2.5,
      paddingHorizontal: 2.5,
    },
    contactButton: {
      backgroundColor: '#00274C',
      width: 121,
      height: 25,
      borderRadius: 4,
      justifyContent: "center"
    },
    mbcSignature: {
      width: '54.1%',
      height: undefined,
      aspectRatio: 211 / 28,
      marginTop: 35,
      resizeMode: "contain",
    },
  });

export default HowToHelpScreen