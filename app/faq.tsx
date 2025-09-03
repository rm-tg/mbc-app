import MenuBar from '@/components/MenuBar';
import * as React from 'react';
import { Image, LayoutAnimation, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';
import Banner from '../components/Banner';

// Enable animation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const tabs = ['Eligibility', 'Appointments', 'Other'];

interface ExpandedState {
  whoCanUse: boolean;
  shortOnFood: boolean;
  financialAid: boolean;
  foodLimit: boolean;
  itemLimit: boolean;
  mCard: boolean;
  volunteer: boolean;
  shop: boolean;
  advanceAppointment: boolean;
  scheduleAppointments: boolean;
  appointmentSystem: boolean;
  friend: boolean;
  noLine: boolean;
  howLong: boolean;
  noAppointments: boolean;
  privacyPolicy: boolean;
}

type SectionKey = 'whoCanUse' | 'shortOnFood' | 'financialAid' | 
  'foodLimit' | 'itemLimit' | 'mCard' | 'volunteer' | 'shop' |
  'advanceAppointment' | 'scheduleAppointments' |
  'appointmentSystem' | 'friend' | 'noLine' | 'howLong' |
  'noAppointments' | 'privacyPolicy';

function FAQScreen() {
  const [selectedTab, setSelectedTab] = React.useState('Eligibility');

  const [expanded, setExpanded] = React.useState<ExpandedState>({
      whoCanUse: false,
      shortOnFood: false,
      financialAid: false,
      foodLimit: false,
      itemLimit: false,
      mCard: false,
      volunteer: false,
      shop: false,
      advanceAppointment: false,
      scheduleAppointments: false,
      appointmentSystem: false,
      friend: false,
      noLine: false,
      howLong: false,
      noAppointments: false,
      privacyPolicy: false,
    });

  const toggleSection = (section: SectionKey) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={{paddingBottom: 100,}}>
        <Banner/>
        <View style={styles.content}>
          <View style={{paddingHorizontal: 30}}>
            <Text style={styles.heading}>
              Frequently Asked Questions
            </Text>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelectedTab(tab)}
              style={[
                styles.button,
                selectedTab === tab ? styles.buttonSelected : styles.buttonUnselected
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedTab === tab ? styles.textSelected : styles.textUnselected
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.dropdownContainer}>
          {selectedTab === 'Eligibility' ? (
            <View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('whoCanUse')} style={styles.header}>
                  <Text style={styles.dropTitle}>Who can use the Maize and Blue Cupboard?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.whoCanUse && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.whoCanUse && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('shortOnFood')} style={styles.header}>
                  <Text style={styles.dropTitle}>I'm short on food, but I don't feel like I need “help.” Can I still come?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.shortOnFood && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.shortOnFood && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('financialAid')} style={styles.header}>
                  <Text style={styles.dropTitle}>Will using the Maize and Blue Cupboard affect my financial aid?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.financialAid && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.financialAid && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('foodLimit')} style={styles.header}>
                  <Text style={styles.dropTitle}>Is there a limit on how much food I can take?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.foodLimit && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.foodLimit && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('itemLimit')} style={styles.header}>
                  <Text style={styles.dropTitle}>Are there limits on personal care items or cookware?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.itemLimit && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.itemLimit && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('mCard')} style={styles.header}>
                  <Text style={styles.dropTitle}>Do I need to show my MCard each time I visit?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.mCard && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.mCard && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('volunteer')} style={styles.header}>
                  <Text style={styles.dropTitle}>Am I eligible to volunteer at the Maize and Blue Cupboard?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.volunteer && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.volunteer && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={{marginTop: 20,}}></View>
            </View>
          ): (
            <View>
            </View>
          )}
          {selectedTab === 'Appointments' ? (
            <View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('shop')} style={styles.header}>
                  <Text style={styles.dropTitle}>When can I shop?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.shop && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.shop && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('advanceAppointment')} style={styles.header}>
                  <Text style={styles.dropTitle}>How far in advance can I make an appointment?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.advanceAppointment && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.advanceAppointment && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('scheduleAppointments')} style={styles.header}>
                  <Text style={styles.dropTitle}>How often can I schedule appointments?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.scheduleAppointments && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.scheduleAppointments && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('appointmentSystem')} style={styles.header}>
                  <Text style={styles.dropTitle}>Why does the Maize and Blue Cupboard use an appointment system?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.appointmentSystem && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.appointmentSystem && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('friend')} style={styles.header}>
                  <Text style={styles.dropTitle}>Can I bring a friend with me to my appointment?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.friend && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.friend && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('noLine')} style={styles.header}>
                  <Text style={styles.dropTitle}>Do I need an appointment even if there's no line?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.noLine && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.noLine && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('howLong')} style={styles.header}>
                  <Text style={styles.dropTitle}>How long do appointments last? Can I shop longer than 15 minutes?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.howLong && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.howLong && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('noAppointments')} style={styles.header}>
                  <Text style={styles.dropTitle}>What if there are no available appointments for a few days?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.noAppointments && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.noAppointments && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={{marginTop: 20,}}></View>
            </View>
          ): (
            <View>
            </View>
          )}
          {selectedTab === 'Other' ? (
            <View>
              <View style={styles.dropdown}>
                <TouchableOpacity onPress={() => toggleSection('privacyPolicy')} style={styles.header}>
                  <Text style={styles.dropTitle}>What is your privacy policy?</Text>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("../assets/drive/downArrow.png")}
                      style={[
                        styles.icon,
                        expanded.privacyPolicy && { transform: [{ rotate: '180deg' }] }
                      ]}
                    />
                  </View>
                </TouchableOpacity>
                {expanded.privacyPolicy && (
                  <View>
                    <Text>Lorem Ipsum</Text>
                  </View>
                )}
              </View>
              <View style={{marginTop: 20,}}></View>
            </View>
          ): (
            <View>
            </View>
          )}
        </View>
      </ScrollView>
      <MenuBar/>
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
      paddingBottom: 35,
    },
    heading: {
      marginTop: 24,
      fontSize: 24,
      fontFamily: "Montserrat_700Bold",
      color: '#00274C',
      textAlign: 'center',
    },
    arrow: {
      fontSize: 16,
      color: '#002b5c',
      marginLeft: 8,
    },
    iconContainer: {
      width: 20,
      height: 56,
      paddingLeft: 5
    },
    icon: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain'
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 7,
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginHorizontal: 5,
      borderRadius: 5,
    },
    buttonSelected: {
      backgroundColor: '#00274C', // Dark blue
    },
    buttonUnselected: {
      backgroundColor: '#D9D9D9', // Light grey
    },
    textSelected: {
      color: '#FFFFFF',
    },
    textUnselected: {
      color: '#000000',
    },
    buttonText: {
      fontSize: 14,
      fontFamily: "Montserrat_700Bold",
    },
    dropdownContainer: {
      backgroundColor: '#00274C',
      marginHorizontal: 20,
      borderRadius: 5,
    },
    dropdown: {
      backgroundColor: '#FFFFFF',
      borderRadius: 6,
      paddingHorizontal: 8,
      marginHorizontal: 16,
      marginTop: 20,
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
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default FAQScreen;