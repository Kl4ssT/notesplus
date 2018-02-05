import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './actions';
import Loader from "../../modules/Loader";
import Colors from "../../../constants/Colors";

@connect(state => ({
    notes: state.notes
}), actions)

export default class NotesScene extends Component
{
    _onRefresh = async () => {
        await this.props.getNotes();
    };

    componentDidMount = async () => {
        await this._onRefresh();
    };

    render()
    {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.notes.isLoading}
                        onRefresh={this._onRefresh}
                        tintColor={Colors.pink}
                        colors={[Colors.pink]}
                    />
                }
            >
                { this.props.notes.items.map((item, index) => <View key={index}><Text>{item.title}</Text></View>)}
            </ScrollView>
        );
    }
}