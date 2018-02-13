import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';
import Colors from "../../../../constants/Colors";

export default class Input extends Component
{
    state = {
        isFocused: false,
        labelPosition: new Animated.Value(0),
        focusedAnim: null,
        blurredAnim: null
    };

    componentDidMount()
    {
        this.state.focusedAnim = Animated.timing(
            this.state.labelPosition,
            {
                toValue: 0,
                duration: 300
            }
        );

        this.state.blurredAnim = Animated.timing(
            this.state.labelPosition,
            {
                toValue: 17,
                duration: 300
            }
        );
    }

    _focusHandler = () => {
        this.setState({ isFocused: true });
        this.state.focusedAnim.start();
    };

    _blurHandler = () => {
        this.setState({ isFocused: false });

        if (this.props.value === '')
            this.state.blurredAnim.start();
    };

    render()
    {
        const labelStyles = {
            position: 'relative',
            color: this.props.error.field === this.props.field ? Colors.red : Colors.pink,
            fontSize: 14,
            fontFamily: 'MontserratRegular',
            top: this.state.labelPosition
        };

        const containerStyles = {
            position: 'relative',
            borderBottomColor: this.props.error.field === this.props.field ? Colors.red : Colors.pink,
            borderBottomWidth: 1,
            paddingHorizontal: 30,
            paddingVertical: 10
        };

        const inputStyles = {
            fontFamily: 'MontserratMedium',
            fontSize: 18,
            color: Colors.black,
        };

        const errorStyles = {
            color: Colors.red,
            fontSize: 14,
            textAlign: 'center'
        };

        return (
            <View>
                <View style={containerStyles}>
                    <Animated.Text style={labelStyles}>{ this.props.label }</Animated.Text>
                    <TextInput
                        style={inputStyles}
                        underlineColorAndroid={Colors.transparent}
                        onFocus={this._focusHandler}
                        onBlur={this._blurHandler}
                        { ...this.props }
                    />
                </View>
                {
                    this.props.error.field === this.props.field
                        ? (<Text style={errorStyles}>{this.props.error.message}</Text>)
                        : null
                }
            </View>
        );
    }
}