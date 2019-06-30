import React, { Component } from 'react';
import { Button, SectionList, Text, View, TouchableHighlight } from 'react-native';
import io from 'socket.io-client';
import Constant from '../helpers/Constant';
import Friend from '../helpers/Friend';
import Token from '../helpers/Token';

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <View>
                <Button title="My QR Code"
                    onPress={() => navigation.navigate('ScanMe')}
                />

                <Button title="Scan QR Code"
                    onPress={() => navigation.navigate('Scan')}
                />
            </View>
        )
    });

    pushToChatList(friend) {
        this.setState((state, props) => {
            let newChatList = state.chatList;
            
            newChatList.push({
                id: friend.id,
                title: friend.name,
                data: 'Hello There',
            });

            return { chatList: newChatList };
        });
    }

    componentDidMount() {
        this.setState({ chatList: [] }, () => Friend.forEach(this.pushToChatList));

        Token.retrieve().then(token => {
            const socket = io(Constant.server.url, {
                query: {
                    token: token,
                }
            });
        });
    }

    constructor(props) {
        super(props);
        
        this.state = { chatList: [] };

        this.switchToLoginScreen = this.switchToLoginScreen.bind(this);
        this.chatWith = this.chatWith.bind(this);
        this.pushToChatList = this.pushToChatList.bind(this);
        this.renderChatList = this.renderChatList.bind(this);
    }

    switchToLoginScreen() {
        const { navigate } = this.props.navigation;

        navigate('Login');
    }

    chatWith(recipientLocalId) {
        const { navigate } = this.props.navigation;

        navigate('Chat', { recipientLocalId: recipientLocalId });
    }

    renderChatList() {
        return this.state.chatList.map((friend, index) => {
            return (
                <TouchableHighlight key={friend.id} onPress={() => this.chatWith(friend.id)}>
                    <View>
                        <Text>{friend.title}</Text>
                        <Text>{friend.data}</Text>
                    </View>
                </TouchableHighlight>
            );
        });
    }

    render() {
        const chatList = this.renderChatList;

        return (
            <View>
                { chatList() }
            </View>
        );
    }
}