import React, { Component } from 'react';
import { Button } from 'react-native';
import io from 'socket.io-client';
import Constant from '../helpers/Constant';
import { Registration } from '../helpers/Authentication';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.scanQRCode = this.scanQRCode.bind(this);

        // const socket = io(Constant.server.url, {
        //     query: {
        //         token: 'password',
        //     }
        // });

        if (true) {
            this.switchToRegistrationScreen();
        }
    }

    switchToRegistrationScreen() {
        const { navigate } = this.props.navigation;

        navigate('Registration');
    }

    scanQRCode() {
        const { navigate } = this.props.navigation;

        navigate('Scan');
    }

    render() {
        return (
            <Button
                title="Go to Jane's profile"
                onPress={this.scanQRCode}
            />
        );
    }
}