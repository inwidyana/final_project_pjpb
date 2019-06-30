import React, { Component } from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode';
import Keypair from '../helpers/Keypair';
import Cipher from '../helpers/Cipher';
import CryptoJS from 'crypto-js';

export default class ScanMe extends Component {
    state = {
        publicKey: '',
    }

    static navigationOptions = {
        title: 'My QR Code',
    }

    componentDidMount() {
        Keypair.retrievePublicKey().then(key => {
            this.setState({ publicKey: key });
        });
    }

    render() {
        if (!this.state.publicKey) {
            return <View />
        }
        else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <QRCode
                        value={this.state.publicKey}
                        size={300}
                        bgColor='black'
                        fgColor='white' />
                </View>
            );
        }
    }
}
