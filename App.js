import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading, Asset, Font } from 'expo';

import { AsyncStorage } from 'react-native';

import store from './src/redux/store';

import Root from './src/Root';
import MontserratFont from './assets/fonts/Montserrat';

export default class App extends Component
{
    state = {
        isLoaded: false
    };

    async componentDidMount()
    {
        await AsyncStorage.removeItem('token');
    }

    render()
    {
        if (!this.state.isLoaded)
            return (
                <AppLoading
                    startAsync={this._loadResources}
                    onFinish={() => { this.setState({ isLoaded: true }) }}
                    onError={(error) => console.log(error)}
                />
            );

        return (
            <Provider store={store}>
                <Root />
            </Provider>
        )
    }

    _loadResources = async () => {
        return Promise.all([
            Font.loadAsync({
                ...Ionicons.font,
                ...MontserratFont
            }),
            Asset.loadAsync([
                require('./assets/images/background.jpg')
            ])
        ])
    }
}