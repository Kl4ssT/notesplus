import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Colors from "../../../../constants/Colors";

import NormalNotes from './NormalNotes';
import FavouriteNotes from './FavouriteNotes';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

export default class Tabs extends Component
{
    state = {
        index: 0,
        routes: [
            { key: 'normal', title: 'Обычные' },
            { key: 'favourite', title: 'Важные' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} style={styles.tabBar} />;

    _renderScene = SceneMap({
        normal: () => (<NormalNotes navigation={this.props.navigation} />),
        favourite: () => (<FavouriteNotes navigation={this.props.navigation} />),
    });

    render()
    {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabBar: {
        backgroundColor: Colors.pink
    }
});