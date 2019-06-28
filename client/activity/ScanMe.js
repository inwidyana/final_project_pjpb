import React, { Component } from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode';
import Keypair from '../helpers/Keypair';

export default class ScanMe extends Component {
    state = {
        publicKey: '',
    }

    componentDidMount() {
        Keypair.retrievePublicKey().then(key => this.setState({ publicKey: key }));
    }

    render() {
        if (!this.state.publicKey) {
            return <View />
        }
        else {
            return (
                <QRCode
                    value={this.state.publicKey}
                    size={200}
                    bgColor='black'
                    fgColor='white' />
            );
        }
    }
}
