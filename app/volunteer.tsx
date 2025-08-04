import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import BackButton from '../components/BackButton';
import Banner from '../components/Banner';

function VolunteerScreen() {
  const router = useRouter();

  return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.mainContainer} >
          <Banner/>
          <BackButton/>
          <View style={styles.content}>
            <Text style={styles.heading}>
              Volunteer
            </Text>
            <Text style={styles.bodyText}>
              {'\n'}
              Interested in being a volunteer? Anyone
              can help, no experience is necessary, and
              you can sign up for a shift that works with
              your schedule.
            </Text>
            <Text style={styles.subHeading}>
              Volunteer Opportunities
            </Text>
            <View style={styles.volunteerBox}>
              <Text style={styles.boxHeading}>
                Volunteer at Maize and Blue
              </Text>
              <Text style={styles.boxSubHeading}>
                420 State Street
              </Text>
              <Text style={styles.boxBodyText}>
                Lorem ipsum dolor sit amet consecte. Nunc in
                et orci mauris habitant nisl amet ornare.
                Dictum convallis at lacus.
              </Text>
            </View>
            <TouchableOpacity style={styles.signUpButton} onPress={() => router.navigate('/about')}>
              <View style={styles.signUpBox}>
                <Text style={styles.signUpText}>
                  Sign up
                </Text>
                <Image
                  source={require('../assets/howToHelp/right-arrow.png')}
                  style={styles.rightArrowImg}
                  resizeMode="contain" 
                />
              </View>
            </TouchableOpacity>
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
      paddingBottom: 20,
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
    rightArrowImg: {
      width: 18,
      height: 18,
    },
    contactText: {
      color: '#FFFFFF',
      fontFamily: "Montserrat_600SemiBold",
      textAlign: 'center',
    },
    signUpText: {
      color: '#FFFFFF',
      fontFamily: "Montserrat_600SemiBold",
      textAlign: 'left',
      fontSize: 16,
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

export default VolunteerScreen;