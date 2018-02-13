import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Colors from "../../constants/Colors";

export default ({ onStart, style }) => {
    if (onStart)
        return (
            <View style={[styles.container, { ...style }]}>
                <ActivityIndicator size="large" color={Colors.pink} />
            </View>
        );

    return null;
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    }
});