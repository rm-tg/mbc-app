import * as React from 'react';
import { View, StyleSheet, Text, Image, Linking, TouchableOpacity } from 'react-native';


const MenuBar = () => {

    return (
        <View style={styles.menuBarContainer}>
            <Text>MENU BAR</Text>
            
        </View>

    );
};

const styles = StyleSheet.create({
    menuBarContainer: {
        backgroundColor: '#FFFF0F',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '14%',
        width: '100%',
        marginBottom: 19,
    },
    image: {
        width: '15.1%',
        height: undefined,
        aspectRatio: 59 / 36,
        marginBottom: 19,
        resizeMode: 'contain',
    },
});

export default MenuBar;