import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

export default ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Card
            containerStyle={styles.container}
            title={item.title}
        >
            <Text>{item.text}</Text>
        </Card>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});