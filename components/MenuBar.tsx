import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const router = useRouter();

const MenuBar = () => {
    const route = useRoute();

    var onIndex = false;
    var onSchedule = false;
    var onFAQ = false;
    var onRecipes = false;
    var onContact = false;

    switch(route.name){
        case 'index': {
            onIndex = true;
            break;
        }
        case 'appointments': {
            onSchedule = true;
            break;
        }
        case 'faq': {
            onFAQ = true;
            break;
        }
        case 'recipes': {
            onRecipes = true;
            break;
        }
        case 'contact': {
            onContact = true;
            break;
        }
    }

    

    return (
        <View style={styles.menuBarContainer}>
            <View style={styles.iconContainer}>    
                <Pressable onPress={() => router.push('/')}>
                    {onIndex ? (
                        <View style={styles.iconButton}>
                            <Image
                                source={require("../assets/MenuBar/homeIconSelected.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuTextHighlight}>
                                Home 
                            </Text>
                        </View>
                    ) : (
                        <View>
                            <Image
                                source={require("../assets/MenuBar/homeIcon.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuText}>
                                Home 
                            </Text>
                        </View>
                    )}
                </Pressable>
                
                <Pressable onPress={() => router.push('/appointments')}>
                    {onSchedule ? (
                        <View style={styles.iconButton}>
                            <Image
                                source={require("../assets/MenuBar/schedIconSelected.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuTextHighlight}>
                                Schedule 
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.iconButton}>
                            <Image
                                source={require("../assets/MenuBar/schedIcon.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuText}>
                                Schedule 
                            </Text>
                        </View>
                    )}
                </Pressable>
                <Pressable onPress={() => router.push('/faq')}>
                    {onFAQ ? (
                        <View style={styles.iconButton}>
                            <Image
                                source={require("../assets/MenuBar/faqIconSelected.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuTextHighlight}>
                                FAQ 
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.iconButton}>
                            <Image
                                source={require("../assets/MenuBar/faqIcon.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuText}>
                                FAQ 
                            </Text>
                        </View>
                    )}
                </Pressable>
                <Pressable onPress={() => router.push('/recipes')}>
                    {onRecipes ? (
                        <View style={styles.iconButton}>
                            <Image
                                source={require("../assets/MenuBar/recipiesIconSelected.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuTextHighlight}>
                                Recipes 
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.iconButton}>
                            <Image
                                source={require("../assets/MenuBar/recipiesIcon.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuText}>
                                Recipes 
                            </Text>
                        </View>
                    )}
                </Pressable>
                <Pressable onPress={() => router.push('/contact')}>
                    {onContact ? (
                        <View style={styles.iconButton}>
                            <Image
                                source={require("../assets/MenuBar/contactIconSelected.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuTextHighlight}>
                                Contact
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.iconButton}>
                            <Image
                                source={require("../assets/MenuBar/contactIcon.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuText}>
                                Contact
                            </Text>
                        </View>
                    )}
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
    },
    icon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        //alignItems: 'center',
    },
    iconButton: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    menuText: {
        color: '#00274C',
        fontFamily: "Montserrat_500",
        fontSize: 12,
        alignContent: 'center',
    },
    menuTextHighlight: {
        color: '#00274C',
        fontFamily: "Montserrat_700Bold",
        fontSize: 12,
        alignContent: 'center',
    },
});

export default MenuBar;