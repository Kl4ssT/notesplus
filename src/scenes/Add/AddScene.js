import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';
import { connect } from 'react-redux';
import Loader from '../../modules/Loader';
import Colors from "../../../constants/Colors";
import TextInput from "./components/TextInput";
import * as actions from './actions';

@connect(state => ({
    addForm: state.add
}), actions)

export default class AddScene extends Component
{
    static navigationOptions = {
        title: 'Добавление'
    };

    state = {
        title: '',
        text: '',
        favourites: false
    };

    _handleAdd = async () => {
        await this.props.addNote(this.state);

        if (this.props.addForm.isAdded)
            this.props.navigation.goBack();
    };

    render()
    {
        return (
            <View style={styles.container}>
                <TextInput
                    label="Название"
                    field="title"
                    value={this.state.title}
                    onChangeText={(title) => this.setState({ title })}
                    error={this.props.addForm.error}
                />
                <TextInput
                    label="Текст"
                    field="text"
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text })}
                    error={this.props.addForm.error}
                    multiline={true}
                />
                <View style={styles.group}>
                    <Text style={styles.text}>Важное</Text>
                    <Switch
                        value={this.state.favourites}
                        onValueChange={(value) => this.setState({ favourites: value })}
                        thumbTintColor={Colors.pink}
                    />
                </View>
                <Button color={Colors.pink} title="Добавить заметку" style={styles.button} onPress={this._handleAdd} />
                <Loader onStart={this.props.addForm.isLoading} style={{ backgroundColor: Colors.white }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingVertical: 40
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    text: {
        fontFamily: 'MontserratRegular',
        color: Colors.pink
    },
    button: {
        backgroundColor: Colors.pink,
        color: Colors.white
    }
});