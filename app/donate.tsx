import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import BackButton from '../components/BackButton';
import Banner from '../components/Banner';
import ContactUs from '../components/contactUs';

function DonateScreen() {
  const router = useRouter();

  return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.mainContainer} >
          <Banner/>
          <BackButton/>
          <View style={styles.content}>
            <Text style={styles.heading}>
              Donate
            </Text>
            <Text style={styles.bodyTextFirst}>
              {'\n'}
              Interested in donating money and/or
              goods to the pantry? See how your
              donations can make an impact. 
            </Text>
            <Text style={styles.subHeading}>
              Donate to a Fund
            </Text>
            <Text style={styles.bodyTextSecond}>
                {'\n'}
                Did you know that when you donate money,
                your dollar goes ten times further to help a
                student in need? That's because we use
                monetary donations to purchase discounted
                food from a community food bank. Any
                amount can make a difference in a student's
                life. Please note that all monetary donations
                must be made online.
                {'\n'}
                {'\n'}
                There are four options for giving. Choose your
                own donation path to make an impact on-
                campus for UM community members in need.
            </Text>
            <View>

            </View>
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
            <ContactUs/>
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
      paddingBottom: 105,
    },
    signUpButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    heading: {
      fontSize: 24,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      textAlign: 'center',
    },
    subHeading: {
      fontSize: 16,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      textAlign: 'center',
      paddingTop: 35,
    },
    boxHeading: {
      fontSize: 16,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      textAlign: 'left',
    },
    boxSubHeading: {
      fontSize: 14,
      fontFamily: "Montserrat_600SemiBold",
      color: '#515050',
      paddingTop: 6,
    },
    boxBodyText: {
      fontSize: 12,
      fontFamily: "Montserrat_500Medium",
      color: '#000000',
      paddingTop: 13,
      paddingRight: 27,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      marginTop: 28,
      marginBottom: 11,
    },
    buttonTextLeft: {
      fontSize: 16,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      textAlign: 'left',
      paddingTop: 7
    },
    bodyTextFirst: {
      fontSize: 14,
      fontFamily: "Montserrat_400Regular",
      color: '#000000',
      textAlign: 'center',
      paddingHorizontal: 60,
    },
    bodyTextSecond: {
      fontSize: 14,
      fontFamily: "Montserrat_400Regular",
      color: '#000000',
      textAlign: 'center',
      paddingHorizontal: 40,
    },
    bodyTextLeftAlign: {
      fontSize: 13,
      fontFamily: "Montserrat_500Medium",
      color: '#000000',
      width: '91.03%',
      textAlign: 'left',
      paddingRight: 20
    },
    rightArrowImg: {
      width: 18,
      height: 18,
    },
    signUpText: {
      color: '#FFFFFF',
      fontFamily: "Montserrat_600SemiBold",
      textAlign: 'left',
      fontSize: 16,
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
    mbcSignature: {
      width: '54.1%',
      height: undefined,
      aspectRatio: 211 / 28,
      marginTop: 35,
      resizeMode: "contain",
    },
    volunteerBox: {
      backgroundColor: '#FFFFFF',
      top: 19,
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 16,
      marginBottom: 14,
      width: 331,
      height: 144,
      flexDirection: 'column',
      // Drop shadow
      shadowColor: "#000000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,  // 30% opacity
      shadowRadius: 2,     // 4px blur
      elevation: 2,        // Android equivalent
    },
    signUpBox: {
      backgroundColor: '#00274C',
      top: 10,
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 16,
      marginBottom: 14,
      width: 331,
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // Drop shadow
      shadowColor: "#000000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,  // 30% opacity
      shadowRadius: 2,     // 4px blur
      elevation: 2,        // Android equivalent
    },
  });

export default DonateScreen;