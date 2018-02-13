import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import Tabs from './components/Tabs';

import * as actions from './actions';
import Colors from "../../../constants/Colors";

const AddButton = () => (
    <Button
        icon={<Ionicons name='md-add' color={Colors.white} size={28} />}
        onPress={() => {}}
        buttonStyle={styles.addButton}
        iconContainerStyle={styles.addButtonIcon}
    />
);

const NotesView = ({ notes }) => (
    <ScrollView>
        {notes.map((item) => (
            <View>
                <Text>{item.title}</Text>
            </View>
        ))}
    </ScrollView>
);

@connect(state => ({
    notes: state.notes
}), actions)

export default class NotesScene extends Component
{
    static navigationOptions = {
        title: 'Заметки'
    };

    _getNotes = async () => {
        await this.props.getNotes();
    };

    componentDidMount = async () => {
        await this._getNotes();
    };

    render()
    {
        return (
            <View style={styles.container}>
                <Tabs navigation={this.props.navigation} />
                <ActionButton
                    buttonColor={Colors.pink}
                    onPress={() => { this.props.navigation.navigate('Add') }}
                >
                    <Ionicons name="md-add" color={Colors.white} size={24} />
                </ActionButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});