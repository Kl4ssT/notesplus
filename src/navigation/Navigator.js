import React from 'react';
import { StackNavigator } from 'react-navigation';
import Colors from "../../constants/Colors";

import { NotesScene, AddScene, EditScene } from '../scenes';

export default StackNavigator(
    {
        Notes: {
            screen: NotesScene
        },
        Add: {
            screen: AddScene
        },
        Edit: {
            screen: EditScene
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
        backgroundColor: Colors.purple,
    },
    headerTitle: {
        color: Colors.white
    }
};