import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Friend from '../helpers/Friend';
import { AsyncStorage } from 'react-native';

export default class Chat extends Component {
    state = {
        recipientLocalId: null,
        currentChat: '',
    };

    componentDidMount() {
        const { navigation } = this.props;

        const recipientLocalId = navigation.getParam('recipientLocalId', null);

        this.setState({ recipientLocalId: recipientLocalId });
    }

    render() {
        return (
            <View>
                <Text>{this.state.recipientLocalId}</Text>
                <TextInput placeholder="Say something nice..." value={this.currentChat} onChange={(text) => this.setState({ currentChat: text })} />
            </View>
        );
    }
}