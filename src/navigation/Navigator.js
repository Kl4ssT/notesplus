import React from 'react';
import { StackNavigator } from 'react-navigation';
import Colors from "../../constants/Colors";

import { NotesScene } from '../scenes';

export default StackNavigator(
    {
        Notes: {
            screen: NotesScene
        }
    },
    {
        navigationOptions: () => ({
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: Colors.white
        })
    }
);

const styles = {
    header: {
        backgroundColor: Colors.transparent,
    },
    headerTitle: {
        color: Colors.white
    }
};