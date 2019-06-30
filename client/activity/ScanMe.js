import React, { Component } from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode';
import Keypair from '../helpers/Keypair';
import Cipher from '../helpers/Cipher';

export default class ScanMe extends Component {
    state = {
        publicKey: '',
    }

    static navigationOptions = {
        title: 'My QR Code',
    }

    componentDidMount() {
        cipher = new Cipher();

        Keypair.retrievePublicKey().then(key => {
            console.log(key);

            this.setState({ publicKey: key });

            cipher.setPublicKey(key);

            Keypair.retrievePrivateKey().then(privateKey => {
                console.log(privateKey);

                cipher.setPrivateKey(privateKey);

                //

                encrypted = cipher.publicEncrypt('Hello');

                console.log('encrypted: ' + encrypted);

                decrypted = cipher.publicDecrypt(encrypted);

                console.log('decrypted: ' + decrypted);

                //

                encrypted = cipher.privateEncrypt('Hello');

                console.log('encrypted: ' + encrypted);

                decrypted = cipher.privateDecrypt(encrypted);

                console.log('decrypted: ' + decrypted);
            });
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
