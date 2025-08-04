import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ContactUs = () => {

    return(
        <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('mailto:maize.blue.cupboard@umich.edu')}>
            <Text style={styles.contactText}>
                Contact Us
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    contactButton: {
        backgroundColor: '#00274C',
        width: 121,
        height: 25,
        borderRadius: 4,
        justifyContent: "center"
    },
    contactText: {
      color: '#FFFFFF',
      fontFamily: "Montserrat_600SemiBold",
      textAlign: 'center',
    },
});

export default ContactUs;