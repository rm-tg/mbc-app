import { useRouter } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const BackButton = () => {
    const router = useRouter();

    return(
        <View style={styles.headerRow}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.dismiss()}>
            <Image
                source={require('../assets/about/back-arrow.png')}
                style={styles.arrowImg}
                resizeMode="contain"
            />
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
    marginBottom: 3,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowImg: {
    width: 24,
    height: 24,
  },
});

export default BackButton;