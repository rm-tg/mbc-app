import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeButton = () => {
    const router = useRouter();

    return(
        <View style={styles.headerRow}>
            <TouchableOpacity style={styles.homeButton} onPress={() => router.dismiss()}>
            <Image
                source={require('../assets/about/back-arrow.png')}
                style={styles.arrowImg}
                resizeMode="contain"
            />
            <Text style={styles.homeText}>HOME</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    marginLeft: 8,
    marginBottom: 21,
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowImg: {
    width: 24,
    height: 24,
  },
  homeText: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: '#00274C',
    letterSpacing: 0.5,
  },
});

export default HomeButton;