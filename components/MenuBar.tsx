import { useRouter, useSegments } from 'expo-router';
import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

/*Usage:

Add
`
<View>
    <MenuBar/>
</View>
`
Below a page's scrollview
And add padding to the scrollview's style like so:

`
<ScrollView
    style={styles.mainContainer}
    contentContainerStyle={{ alignItems: 'center', paddingBottom: 100, }}
>
`
*/




const MenuBar = () => {
    const router = useRouter();
    const segments = useSegments(); 

    // Use Figma mockup to determine what bar icon
    // should be highlighted on each page.
    const currentRoute = segments[segments.length - 1] || 'index';

    let onIndex = false;
    let onSchedule = false;
    let onFAQ = false;
    let onRecipes = false;
    let onContact = false;

    switch(currentRoute){
        case 'index': 
        case 'about':
        case 'snapinfo': {
            onIndex = true;
            break;
        }
        case 'appointments':
        case 'volunteering':{
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
                <Pressable onPress={() => router.navigate('/')}>
                    {onIndex ? (
                        <View style = {styles.iconAndText}>
                            <Image
                                source={require("../assets/MenuBar/homeIconSelected.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuTextHighlight}>
                                Home 
                            </Text>
                        </View>
                    ) : (
                        <View style = {styles.iconAndText}>
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
                
                <Pressable onPress={() => router.navigate('/appointments')}>
                    {onSchedule ? (
                        <View style = {styles.iconAndText}>
                            <Image
                                source={require("../assets/MenuBar/schedIconSelected.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuTextHighlight}>
                                Schedule 
                            </Text>
                        </View>
                    ) : (
                        <View style = {styles.iconAndText}>
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
                <Pressable onPress={() => router.navigate('/faq')}>
                    {onFAQ ? (
                        <View style = {styles.iconAndText}>
                            <Image
                                source={require("../assets/MenuBar/faqIconSelected.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuTextHighlight}>
                                FAQ 
                            </Text>
                        </View>
                    ) : (
                        <View style = {styles.iconAndText}>
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
                <Pressable onPress={() => router.navigate('/recipes')}>
                    {onRecipes ? (
                        <View style = {styles.iconAndText}>
                            <Image
                                source={require("../assets/MenuBar/recipiesIconSelected.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuTextHighlight}>
                                Recipes 
                            </Text>
                        </View>
                    ) : (
                        <View style = {styles.iconAndText}>
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
                <Pressable onPress={() => router.navigate('/contact')}>
                    {onContact ? (
                        <View style = {styles.iconAndText}>
                            <Image
                                source={require("../assets/MenuBar/contactIconSelected.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.menuTextHighlight}>
                                Contact
                            </Text>
                        </View>
                    ) : (
                        <View style = {styles.iconAndText}>
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
        //alignItems: 'flex-end',
        width: '90%', // 356/390
    },
    icon: {
        width: 28,
        height: 28,
        flexDirection: 'column',
        justifyContent: 'center',
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
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconAndText: {
        flexDirection: 'column', // Stack the icon and text vertically
        alignItems: 'center',    // Center horizontally
        justifyContent: 'center', // Center vertically
    }
});

export default MenuBar;