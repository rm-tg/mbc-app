import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <View style={styles.iconContainer}>
                {/* Left-aligned group */}
                <View style={styles.leftGroup}>
                    <Image
                        source={require("../assets/m-logo.png")}
                        style={styles.blockm}
                    />
                    <Image
                        source={require("../assets/MBC-signature-stationery-white 3.png")}
                        style={styles.logo}
                    />
                </View>

                {/* Right-aligned bell, need to add link to notification page*/}
                <Image
                    source={require("../assets/notification-bell.png")}
                    style={styles.bell}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: '#00274C',
        height: 98,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 14,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '91.28%', // 356/390
        height: 31,
    },
    leftGroup: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    blockm: {
        width: 50,
        height: 31,
        resizeMode: 'contain',
    },
    logo: {
        width: 231,
        height: 29,
        resizeMode: 'contain',
        marginBottom: 2,
    },
    bell: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        marginBottom: 3,
    },
});

export default Banner;