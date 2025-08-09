import * as React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackButton from '../components/BackButton';
import Banner from '../components/Banner';
import ContactUs from '../components/contactUs';

function DonateScreen() {

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
          <View style={styles.donateBox}>
              <Text style={styles.donateText}>
                Deborah and Steve Rosenthal Family Fund
              </Text>
              <TouchableOpacity style={styles.donateButton}
                onPress={() => Linking.openURL('https://giving.umich.edu/basket/fund/702021')}>
                <Text style={styles.donateButtonText}>
                  Donate
                </Text>
              </TouchableOpacity>
          </View>
          <View style={styles.donateBox}>
              <Text style={styles.donateText}>
                Maize and Blue Cupboard Endowment Fund
              </Text>
              <TouchableOpacity style={styles.donateButton}
                onPress={() => Linking.openURL('https://giving.umich.edu/basket/fund/732740')}>
                <Text style={styles.donateButtonText}>
                  Donate
                </Text>
              </TouchableOpacity>
          </View>
          <View style={styles.donateBox}>
              <Text style={styles.donateText}>
                Maize and Blue Cupboard Fund
              </Text>
              <TouchableOpacity style={styles.donateButton}
                onPress={() => Linking.openURL('https://giving.umich.edu/basket/fund/333660')}>
                <Text style={styles.donateButtonText}>
                  Donate
                </Text>
              </TouchableOpacity>
          </View>
          <View style={styles.donateBox}>
              <Text style={styles.donateText}>
                Strong Enough for All Fund
              </Text>
              <TouchableOpacity style={styles.donateButton}
                onPress={() => Linking.openURL('https://giving.umich.edu/basket/fund/702083')}>
                <Text style={styles.donateButtonText}>
                  Donate
                </Text>
              </TouchableOpacity>
          </View>
          <Text style={styles.subHeading}>
            Donate Goods
          </Text>
          <Text style={styles.bodyTextThird}>
              {'\n'}
              We accept food, kitchenware, and
              personal care items!
              {'\n'}
              {'\n'}
              For more information on the items that we
              accept and tips for donating, view our list
              here:{' '}
              <Text style={styles.hyperlink} onPress={() =>
                  Linking.openURL('https://mbc.studentlife.umich.edu/how-to-help/#money')}>
                  https://mbc.studentlife.umich.edu/how-to-help/#money
              </Text>
          </Text>
          <Text style={styles.bottomParagraph}>
            The Maize and Blue Cupboard utilizes volunteers
            on a regular basis. If your group is interested in
            volunteering at the Cupboard, please contact us
            at{' '}
              <Text style={styles.hyperlink} onPress={() => Linking.openURL('mailto:maize.blue.cupboard@umich.edu')}>
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
    bodyTextFirst: {
      fontSize: 14,
      fontFamily: "Montserrat_400Regular",
      color: '#000000',
      textAlign: 'center',
      paddingHorizontal: 60,
      lineHeight: 19.6
    },
    bodyTextSecond: {
      fontSize: 14,
      fontFamily: "Montserrat_400Regular",
      color: '#000000',
      textAlign: 'center',
      paddingHorizontal: 40,
      paddingBottom: 32,
      lineHeight: 19.6
    },
    bodyTextThird: {
      fontSize: 14,
      fontFamily: "Montserrat_400Regular",
      color: '#000000',
      textAlign: 'center',
      paddingHorizontal: 60,
      lineHeight: 19.6
    },
    bottomParagraph: {
      textAlign: 'center',
      fontSize: 13,
      fontFamily: "Montserrat_500Medium",
      paddingTop: 27,
      paddingHorizontal: 43,
      paddingBottom: 20,
    },
    hyperlink: {
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
    donateBox: {
      backgroundColor: '#00274C',
      top: 19,
      borderRadius: 18,
      paddingVertical: 9,
      marginBottom: 14,
      width: 350,
      height: 75,
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
    donateText: {
      textAlign: 'center',
      fontSize: 14,
      fontFamily: "Montserrat_700Bold",
      color:'#FFFFFF'
    },
    donateButton: {
      backgroundColor: '#FFCB05',
      top: 10,
      borderRadius: 11,
      width: 112,
      height: 30,
      flexDirection: 'column',
      alignSelf: 'center',

      justifyContent: 'center',
      alignItems: 'center',

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
    donateButtonText: {
      textAlign: 'center',
      fontSize: 14,
      fontFamily: "Montserrat_600SemiBold",
      color:'#00274C'
    },
  });

export default DonateScreen;