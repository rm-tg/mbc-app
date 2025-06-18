import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

const router = useRouter();

const MenuBar = () => {
    const route = useRoute();

    var home = "../assets/MenuBar/homeIcon.png";
    var homeSelected = "../assets/MenuBar/homeIconSelected.png";
    var schedule = "../assets/MenuBar/schedIcon.png";
    var scheduleSelected = "../assets/MenuBar/schedIconSelected.png";
    var faq = "../assets/MenuBar/faqIcon.png";
    var faqSelected = "../assets/MenuBar/faqIconSelected.png";
    var recipies = "../assets/MenuBar/recipiesIcon.png";
    var recipiesSelected = "../assets/MenuBar/recipiesIconSelected.png";
    var contact = "../assets/MenuBar/contactIcon.png";
    var contactSelected = "../assets/MenuBar/contactIconSelected.png";

    if(route.name == "index"){
        home = "../assets/MenuBar/homeIconSelected.png";
    }

    return (
        <View style={styles.menuBarContainer}>
            <View style={styles.iconContainer}>
                <Pressable onPress={() => router.push('/')}>
                    <Image
                        source={require("../assets/MenuBar/homeIcon.png")}
                        style={styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => router.push('/appointments')}>
                    <Image
                        source={require("../assets/MenuBar/schedIcon.png")}
                        style={styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => router.push('/faq')}>
                    <Image
                        source={require("../assets/MenuBar/faqIcon.png")}
                        style={styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => router.push('/recipes')}>
                    <Image
                        source={require("../assets/MenuBar/recipiesIcon.png")}
                        style={styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => router.push('/contact')}>
                    <Image
                        source={require("../assets/MenuBar/contactIcon.png")}
                        style={styles.icon}
                    />
                </Pressable>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    menuBarContainer: {
        backgroundColor: '#FFFFFF',
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        zIndex: 999,
        borderRadius: 26,
        // Drop shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,  // 30% opacity
        shadowRadius: 4,     // 4px blur
        elevation: 4,        // Android equivalent
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '91.28%', // 356/390
        height: 31,
    },
    icon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        marginBottom: 3,
    },
});

export default MenuBar;