import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, RefreshControl } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Colors from "../../../../constants/Colors";
import Note from "./Note";

@connect(state => ({
    notes: state.notes
}), actions)

export default class FavouriteNotes extends Component
{
    state = {
        refreshing: false,
    };

    _getNotes = async () => {
        await this.props.getNotes();
    };

    _onRefresh = async () => {
        this.setState({ refreshing: true });
        await this._getNotes();
        this.setState({ refreshing: false })
    };

    render()
    {
        const notes = this.props.notes.items.filter((item) => item.favourites);

        if (notes.length > 0)
            return (
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                            colors={[Colors.pink]}
                            tintColor={Colors.pink}
                        />
                    }
                >
                    {
                        notes.map((item, index) => (
                            <Note key={index} item={item} onPress={() => this.props.navigation.navigate('Edit', { itemId: item.id })} />
                        ))
                    }
                </ScrollView>
            );

        return <View style={styles.notFound}><Text style={styles.notFoundText}>Ничего не найдено</Text></View>;
    }
}

const styles = StyleSheet.create({
    notFound: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notFoundText: {
        color: Colors.black,
        opacity: 0.4
    }
});