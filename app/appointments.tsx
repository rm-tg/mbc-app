import MenuBar from '@/components/MenuBar';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { FlatList, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Banner from '../components/Banner';

function AppointmentsScreen() {
  const router = useRouter();

  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  const operatingHours = [
    { date: 'Monday - Friday', time: '8:00 am - 7:00 pm' },
    { date: 'Saturday', time: 'Closed' },
    { date: 'Sunday', time: '8:00 am - 5:00 pm' },
  ];

  const data = [
    { id: '1', title: '•  Lorem ipsum dolor sit amet consecte.' },
    { id: '2', title: '•  Nunc in et orci mauris habitant nisl.' },
    { id: '3', title: '•  Lorem ipsum dolor sit amet consecte.' },
  ];

  type ListItem = {
    id: string;
    title: string;
  };

  const renderItem = ({ item }: { item: ListItem }) => (
    <Text style={styles.listText}>{item.title}</Text>
  );

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Banner />
        <Text style={styles.welcomeText}>
          Visit the Pantry
        </Text>
        <Text style={styles.mainText}>
          Lorem ipsum dolor sit amet consecte. Nunc in et orci mauris habitant nisl amet ornare.
        </Text>
        <Image
          style={{ ...styles.image, aspectRatio: 326 / 190 }}
          source={require('../assets/pantry.png')}
        />
        <TouchableOpacity onPress={() => handlePress('https://calendly.com/mbcappointments/mbc-shopping-appointments')}>
          <Text style={styles.linkText}>
            Click here to schedule a visit
          </Text>
        </TouchableOpacity>
        <Text style={styles.subTitle}>
          What we offer
        </Text>
        <Text style={styles.mainText}>
          Lorem ipsum dolor sit amet consecte. Nunc in et orci mauris habitant nisl amet ornare.
        </Text>
        <FlatList
          data={data}
          style={{ marginTop: 11, flexGrow: 0 }}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={styles.subTitle}>
            Our Hours
          </Text>
          <View style={styles.hoursContainer}>
            <Text style={{ ...styles.hoursText, width: '50%' }}>
              {`Monday - Friday\nSaturday\nSunday`}
            </Text>
            <Text style={styles.hoursText}>
              {`8:00 am - 7:00 pm\nClosed\n8:00 am - 5:00 pm`}
            </Text>
          </View>
        </View>
        <Text style={styles.subTitle}>
          Location
        </Text>
        <Image
          style={{ ...styles.image, aspectRatio: 326 / 182 }}
          source={require('../assets/location-map.png')}
        />
        <TouchableOpacity onPress={() => handlePress('https://www.google.com/maps/place/Betsy+Barbour+Residence,+420+S+State+St,+Ann+Arbor,+MI+48109/@42.2772944,-83.7437539,17z/data=!3m1!4b1!4m5!3m4!1s0x883cae38ac94a547:0xf8a4be6e818a1f4!8m2!3d42.2772944!4d-83.7415652')}>
          <Text style={styles.locationLink}>
            420 S State St{'\n'}
            Ann Arbor, MI 48109
          </Text>
        </TouchableOpacity>
        <Text style={styles.mainText}>
          We are located in the basement of the Betsy{'\n'}
          Barbour Residence Hall, please enter via the{'\n'}
          Maynard entrance only to ensure privacy for{'\n'}
          residents.
        </Text>
        <Text style={{ ...styles.mainText, color: '#781313', marginTop: 23 }}>
          Contact us if you need ramp or elevator access.
        </Text>
        <TouchableOpacity onPress={() => router.navigate('/contactus')}>
          <Image
            style={styles.contact_us_button}
            source={require('../assets/contact-us-button.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.mbcSignature}
          source={require('../assets/mbc-signature-horizontal.png')}
        />
      </ScrollView>
      <View>
        <MenuBar/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 100,
  },
  welcomeText: {
    color: '#00274C',
    fontFamily: "Montserrat_700Bold",
    fontSize: 24,
    marginTop: 35,
  },
  mainText: {
    color: '#000000',
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    width: '84.6%',
    textAlign: 'center',
    marginTop: 11,
  },
  image: {
    width: "83.6%",
    height: undefined,
    marginTop: 16,
    resizeMode: "contain",
  },
  linkText: {
    color: '#00274C',
    textDecorationLine: 'underline',
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    marginTop: 16,
    marginBottom: 20,
  },
  subTitle: {
    color: '#00274C',
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    marginTop: 15,
  },
  listText: {
    color: '#000000',
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
  },
  hoursContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '70%',
    marginTop: 15,
    paddingLeft: '3.85%',
  },
  hoursText: {
    fontFamily: "Rubik-Light",
    fontSize: 14,
    color: '#000000',
    textAlign: 'left',
  },
  locationLink: {
    color: '#000000',
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
    width: '84.6%',
    marginTop: 14,
    marginBottom: 5,
  },
  contact_us_button: {
    width: '31%',
    height: undefined,
    aspectRatio: 121 / 25,
    marginTop: 17,
    resizeMode: "contain",
  },
  mbcSignature: {
    width: '54.1%',
    height: undefined,
    aspectRatio: 211 / 28,
    marginTop: 35,
    resizeMode: "contain",
  },
});

export default AppointmentsScreen;