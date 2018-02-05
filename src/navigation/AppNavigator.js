import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import { LoginScene } from '../scenes';
import Navigator from './Navigator';

@connect(
    state => ({
        navigation: state.navigation,
        login: state.login
    })
)

export default class AppNavigator extends Component
{
    render()
    {
        const addListener = createReduxBoundAddListener("root");

        const navigation = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation,
            addListener
        });

        if (this.props.login.isLogged)
        {
            return <Navigator navigation={navigation} />
        }

        return <LoginScene />;
    }
}

export const router = Navigator.router;