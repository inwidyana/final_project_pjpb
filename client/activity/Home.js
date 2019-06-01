import React, { Component } from 'react';
import { Button } from 'react-native';
import io from 'socket.io-client';
import Constant from '../helpers/Constant';

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
            this.switchToLoginScreen();
        }
    }

    switchToLoginScreen() {
        const { navigate } = this.props.navigation;

        navigate('Login');
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