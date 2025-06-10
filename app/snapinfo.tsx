import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Banner from '../components/Banner';

function SnapInfoScreen() {

  return (
    <View style={styles.mainContainer}>
      <Banner />
      <Text style={styles.snapInfoText}>
        Michigan Food Assistance Program (FAP)
      </Text>

      <View style={styles.subContainer}>
        <Text style={styles.subContainerTitle}>
          ELIGIBILITY
        </Text>
        <Text style={styles.subContainerText}>
          Eligibility for FAP is based on your household size and monthly income.
        </Text>
        <Text style={[styles.subContainerText, { textDecorationLine: 'underline' }]}>
          Learn More About FAP Eligibility
        </Text>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subContainerTitle}>
          WHERE TO APPLY
        </Text>
        <Text style={styles.subContainerText}>
          To apply for FAP, you can submit an application to MDHHS. The fastest way to apply is online through the MDHHS website, MI Bridges. You can also apply in person at your local MDHHS office.
        </Text>
      </View>

      <View style={styles.applyTitleContainer}>
        <Text style={[styles.subContainerTitle, { marginTop: 16 }]}>
          NEED ASSISTANCE?
        </Text>
      </View>
      <View style={styles.applyTextContainer}>
        <Text style={styles.applyText}>
          We’re here to help! Contact us to schedule an appointment for assistance applying for FAP.
        </Text>
        <TouchableOpacity onPress={() => console.log('Learn More pressed')}>
          <Text style={styles.learnMore}>Contact Us</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  snapInfoText: {
    color: "#00274C",
    fontFamily: "Montserrat_700Bold",
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 27,
  },
  subContainer: {
    width: "80%",
    height: 168,
    backgroundColor: "#00274C",
    borderRadius: 14,
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  subContainerTitle: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
    fontFamily: "Montserrat_700Bold",
    marginTop: 20,
  },
  subContainerText: {
    color: "white",
    fontSize: 14,
    textAlign: 'center',
    fontFamily: "Montserrat_500Medium",
    marginTop: 16,
    marginBottom: 7,
    paddingHorizontal: 10,
    width: "88%",
  },
  applyTitleContainer: {
    width: "80%",
    height: 44,
    backgroundColor: "#00274C",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 30,
    alignItems: 'center',
  },
  applyTextContainer: {
    width: "80%",
    height: 123,
    backgroundColor: "#fff",
    borderColor: "#00274C",
    borderWidth: 3,
    alignItems: 'center',
  },
  applyText: {
    color: "#00274C",
    fontSize: 14,
    textAlign: 'center',
    fontFamily: "Montserrat_500Medium",
    marginTop: 18,
    marginBottom: 6,
    paddingHorizontal: 10,
    width: "88%"
  },
  learnMore: {
    color: "#00274C",
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Montserrat_700Bold",
    textDecorationLine: 'underline',
  },
});

export default SnapInfoScreen