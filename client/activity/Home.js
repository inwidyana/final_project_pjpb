import React, { Component } from 'react';
import { Button, SectionList, Text, View, TouchableHighlight } from 'react-native';
import io from 'socket.io-client';
import Constant from '../helpers/Constant';

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

    constructor(props) {
        super(props);

        this.switchToLoginScreen = this.switchToLoginScreen.bind(this);

        // const socket = io(Constant.server.url, {
        //     query: {
        //         token: 'password',
        //     }
        // });

        if (true) {
            this.switchToLoginScreen();
        }
    }

    switchToLoginScreen() {
        const { navigate } = this.props.navigation;

        navigate('Login');
    }

    switchToChat() {
        // Do something.
    }

    render() {
        return (
            // <Button
            //     title="Go to Jane's profile"
            //     onPress={this.scanQRCode}
            // />

            <SectionList
                renderItem={({ item, index, section: { id, title, data } }) => (
                    <TouchableHighlight onPress={this.switchToChat}>
                        <View>
                            <Text>{title}</Text>
                            <Text>{data}</Text>
                        </View>
                    </TouchableHighlight>
                )}
                // renderSectionHeader={({ section: { title } }) => (
                //     <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                // )}
                sections={[
                    { id: 1, title: 'John Doe', data: ['Hello There'] },
                    { id: 2, title: 'Jane Doe', data: ['Test'] },
                    { id: 3, title: 'Jean Doe', data: ['Test'] },
                ]}
                keyExtractor={(item, index) => item + index}
            />
        );
    }
}