import * as React from 'react';
import { Image, LayoutAnimation, Linking, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';
import BackButton from '../components/BackButton';
import Banner from '../components/Banner';
import ContactUs from '../components/contactUs';

// Enable animation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ExpandedState {
  personal: boolean;
  spice: boolean;
  cookware: boolean;
}

type SectionKey = 'personal' | 'spice' | 'cookware';

function DriveScreen() {

  const [expanded, setExpanded] = React.useState<ExpandedState>({
      personal: false,
      spice: false,
      cookware: false,
    });

  const toggleSection = (section: SectionKey) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.mainContainer} >
        <Banner/>
        <BackButton/>
        <View style={styles.content}>
          <Text style={styles.heading}>
            Host A Drive
          </Text>
          <Text style={styles.bodyTextFirst}>
            {'\n'}
            Interested in hosting a donation drive with
            a team? Schedule a time and find out
            what goods we can accept. 
          </Text>
          <Text style={styles.subHeading}>
            Hosting A Donation Drive
          </Text>
          <Text style={styles.bodyTextSecond}>
              {'\n'}
              We can work with your team to help select
              dates and a drop-off time that works for you.
              We ask that your group reach out to all
              members using the provided marketing
              materials to help maximize the impact of your
              donation drive. Together, we can make great
              strides towards a more equitable campus and
              build bonds within our community!
              {'\n'}
              {'\n'}
              •  Pick a time and type of donation drive
              {'\n'}
              •  Spread the word
              {'\n'}
              •  Collect items
              {'\n'}
              •  Schedule a time to drop off your donation
          </Text>
          <View style={styles.dropdownContainer}>
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => toggleSection('personal')} style={styles.header}>
                <Text style={styles.dropTitle}>Personal Care Items Donation List</Text>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("../assets/drive/downArrow.png")}
                    style={[
                      styles.icon,
                      expanded.personal && { transform: [{ rotate: '180deg' }] }
                    ]}
                  />
                </View>
              </TouchableOpacity>
              {expanded.personal && (
                <View>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                </View>
              )}
            </View>
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => toggleSection('spice')} style={styles.header}>
                <Text style={styles.dropTitle}>Spice Donation List</Text>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("../assets/drive/downArrow.png")}
                    style={[
                      styles.icon,
                      expanded.spice && { transform: [{ rotate: '180deg' }] }
                    ]}
                  />
                </View>
              </TouchableOpacity>
              {expanded.spice && (
                <View>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                </View>
              )}
            </View>
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => toggleSection('cookware')} style={styles.header}>
                <Text style={styles.dropTitle}>Cookware Donation List</Text>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("../assets/drive/downArrow.png")}
                    style={[
                      styles.icon,
                      expanded.cookware && { transform: [{ rotate: '180deg' }] }
                    ]}
                  />
                </View>
              </TouchableOpacity>
              {expanded.cookware && (
                <View>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                  <Text>Lorem Ipsum</Text>
                </View>
              )}
            </View>
          </View>
          <Text style={styles.bodyTextThird}>
              {'\n'}
              For access to our flyer materials, email
              template, and drop off instructions, view
              our information here:{' '}
              <Text style={styles.hyperlink} onPress={() =>
                  Linking.openURL('https://mbc.studentlife.umich.edu/how-to-help/hosting-a-donation-drive/')}>
                  https://mbc.studentlife.umich.edu/how-to-help/hosting-a-donation-drive/
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
      paddingHorizontal: 57,
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
      paddingHorizontal: 55,
      lineHeight: 19.6
    },
    bottomParagraph: {
      textAlign: 'center',
      fontSize: 12,
      fontFamily: "Montserrat_500Medium",
      paddingTop: 27,
      paddingHorizontal: 55,
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
    dropdownContainer: {
      paddingTop: 19,
      //Best practice is dead, I killed it
      paddingBottom: -1,
      paddingHorizontal: 16,
      width: 346,
      backgroundColor: '#002b5c',
      flex: 1,
      borderRadius: 10,
    },
    dropdown: {
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 13,
      borderWidth: 2,
      borderColor: '#FFCB05',
    },
    dropTitle: {
      fontSize: 14,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      textAlign: 'left',
      flex: 1,
    },
    arrow: {
      fontSize: 16,
      color: '#002b5c',
      marginLeft: 8,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconContainer: {
      width: 20,
      height: 20,
      paddingLeft: 5
    },
    icon: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain'
    },
  });

export default DriveScreen;