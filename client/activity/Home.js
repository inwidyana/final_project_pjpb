import React, { Component } from 'react';
import { Button } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.scanQRCode = this.scanQRCode.bind(this);
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