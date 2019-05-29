import React, { Component } from 'react';
import { Button } from 'react-native';
import io from 'socket.io-client';
import Constants from '../helpers/Constants';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.scanQRCode = this.scanQRCode.bind(this);

        const socket = io(Constants.server.url, {
            query: {
                token: 'password',
            }
        });
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