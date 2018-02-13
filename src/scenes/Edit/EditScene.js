import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';
import { connect } from 'react-redux';
import Loader from '../../modules/Loader';
import Colors from "../../../constants/Colors";
import TextInput from "./components/TextInput";
import * as actions from './actions';

@connect(state => ({
    editForm: state.edit
}), actions)

export default class EditScene extends Component
{
    static navigationOptions = {
        title: 'Изменение'
    };

    state = {
        id: null,
        title: '',
        text: '',
        favourites: false
    };

    componentDidMount = async () => {
        const { params } = this.props.navigation.state;

        const note = await this.props.getNote(params.itemId);

        this.setState({ ...note });
    };

    _handleEdit = async () => {
        await this.props.editNote(this.state);
    };

    _handleDelete = async () => {
        await this.props.deleteNote(this.state.id);

        if (this.props.editForm.isDeleted)
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
                    error={this.props.editForm.error}
                />
                <TextInput
                    label="Текст"
                    field="text"
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text })}
                    error={this.props.editForm.error}
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
                <Button color={Colors.pink} title="Изменить заметку" style={styles.button} onPress={this._handleEdit} />
                <Button color={Colors.pink} title="Удалить заметку" style={styles.button} onPress={this._handleDelete} />
                <Loader onStart={this.props.editForm.isLoading} style={{ backgroundColor: Colors.white }} />
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
        color: Colors.white,
        marginBottom: 20
    }
});