import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const MenuBar = () => {
    return (
        <View style={styles.menuBarContainer}>
            <View style={styles.iconContainer}>
                <Image
                    source={require("../assets/MenuBar/homeIcon.png")}
                    style={styles.icon}
                />
                <Image
                    source={require("../assets/MenuBar/schedIcon.png")}
                    style={styles.icon}
                />
                
                <Image
                    source={require("../assets/MenuBar/faqIcon.png")}
                    style={styles.icon}
                />
                <Image
                    source={require("../assets/MenuBar/recipiesIcon.png")}
                    style={styles.icon}
                />
                <Image
                    source={require("../assets/MenuBar/contactIcon.png")}
                    style={styles.icon}
                />
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
        bottom: 0,
        zIndex: 999,
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