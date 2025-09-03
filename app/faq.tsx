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

interface SelectedState {
  eligibility: boolean;
  appointments: boolean;
  other: boolean;
}

interface ExpandedEligibilityState {
  whoCanUse: boolean;
  shortOnFood: boolean;
  financialAid: boolean;
  foodLimit: boolean;
  itemLimit: boolean;
  mCard: boolean;
  volunteer: boolean;
}

interface ExpandedAppointmentState {
  shop: boolean;
  advanceAppointment: boolean;
  scheduleAppointments: boolean;
  appointmentSystem: boolean;
  friend: boolean;
  noLine: boolean;
  howLong: boolean;
  noAppointments: boolean;
}

type SectionKey = 'eligibility' | 'appointments' | 'other';
type EligibilityKey = 'whoCanUse' | 'shortOnFood' | 'financialAid' | 
  'foodLimit' | 'itemLimit' | 'mCard' | 'volunteer';
type AppointmentsKey = 'shop' | 'advanceAppointment' | 'scheduleAppointments' 
  | 'appointmentSystem' | 'friend' | 'noLine' | 'howLong' | 'noAppointments';
type OtherKey = 'privacyPolicy';

function FAQScreen() {

  const [selected, setSelected] = React.useState<SelectedState>({
      eligibility: true,
      appointments: false,
      other: false,
    });

  const [expanded, setExpandedEligibility] = React.useState<ExpandedState>({
      eligibility: false,
      appointments: false,
      other: false,
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
          <View style={{paddingHorizontal: 30}}>
            <Text style={styles.heading}>
              Frequently Asked Questions
            </Text>
          </View>
          
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

export default FAQScreen;