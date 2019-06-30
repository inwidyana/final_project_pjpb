import React, { Component } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import Friend from '../helpers/Friend';

export default class AddFriend extends Component {
    constructor(props) {
        super(props);

        const { navigation } = props;

        const newFriendPublicKey = navigation.getParam('newFriendPublicKey', null);

        this.state = {
            publicKey: newFriendPublicKey,
            name: '',
        };

        this.switchToHome = this.switchToHome.bind(this);
        this.addFriend = this.addFriend.bind(this);
    }

    switchToHome() {
        const { navigate } = this.props.navigation;

        navigate('Home');
    }

    addFriend() {
        Friend
            .addByKey(this.state.publicKey)
            .setName(this.state.name)
            .save();
        
        this.switchToHome();
    }

    render() {
        return (
            <View style={{
                marginRight: 5,
                marginLeft: 5,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>Public Key: {this.state.publicKey}</Text>

                <TextInput placeholder="Type in the new contact name..." value={this.state.name} onChangeText={(name) => this.setState({ name: name })} />

                <Button onPress={this.addFriend} title="Add" />
            </View>
        );
    }
}