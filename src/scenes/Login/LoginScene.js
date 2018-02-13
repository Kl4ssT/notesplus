import React, { Component } from 'react';
import { KeyboardAvoidingView, ImageBackground, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import TextInput from './components/TextInput';
import Loader from '../../modules/Loader';

import * as actions from './actions';
import Colors from "../../../constants/Colors";

@connect(state => ({
    login: state.login
}), actions)

export default class LoginScreen extends Component
{
    state = {
        login: '',
        password: ''
    };

    componentDidMount = async () => {
        console.log('Login');
        await this.props.checkAuth();

        if (this.props.login.isLogged)
            this.props.navigation.navigate('Notes');
    };

    signIn = async () => {
        await this.props.authUser(this.state.login, this.state.password);
    };

    signUp = async () => {
        await this.props.authUser(this.state.login, this.state.password, true);
    };

    render()
    {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <ImageBackground
                    source={require('../../../assets/images/background.jpg')}
                    style={styles.container}
                >
                    <View style={styles.container}>
                        <TextInput
                            label="Логин"
                            field="login"
                            value={this.state.login}
                            onChangeText={(login) => this.setState({ login })}
                            error={this.props.login.error}
                        />
                        <TextInput
                            secureTextEntry
                            label="Пароль"
                            field="password"
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                            error={this.props.login.error}
                        />
                        <Button
                            title="Войти"
                            textStyle={styles.buttonText}
                            buttonStyle={styles.button}
                            onPress={this.signIn}
                        />
                        <TouchableOpacity style={styles.signUpContainer} onPress={this.signUp}>
                            <Text style={styles.signUpLink}>Зарегистрироваться</Text>
                        </TouchableOpacity>
                    </View>
                    <Loader onStart={this.props.login.isLoading} />
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    imageBackground: {
        flex: 1,
        paddingTop: 100
    },
    button: {
        marginTop: 20,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.pink,
    },
    buttonText: {
        color: Colors.white,
        fontFamily: 'MontserratRegular',
        fontSize: 16,
        textAlign: 'center'
    },
    signUpContainer: {
        marginTop: 20
    },
    signUpLink: {
        color: Colors.white,
        textAlign: 'center',
        fontFamily: 'MontserratBold',
        fontSize: 14
    }
});