import React, { Component } from 'react';
import { Button, SectionList, Text } from 'react-native';
import io from 'socket.io-client';
import Constant from '../helpers/Constant';

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <Button title="Scan QR Code"
                onPress={() => navigation.getParam('Scan')()}
            />
        )
    });

    componentDidMount() {
        this.props.navigation.setParams({ Scan: this.scanQRCode });
    }

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

    scanQRCode = () => {
        const { navigate } = this.props.navigation;

        navigate('Scan');
    }

    switchToLoginScreen() {
        const { navigate } = this.props.navigation;

        navigate('Login');
    }

    render() {
        return (
            // <Button
            //     title="Go to Jane's profile"
            //     onPress={this.scanQRCode}
            // />

            <SectionList
                renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                )}
                sections={[
                    { title: 'John Doe', data: ['Hello There'] },
                    { title: 'Jane Doe', data: ['Test'] },
                    { title: 'Jean Doe', data: ['Test'] },
                ]}
                keyExtractor={(item, index) => item + index}
            />
        );
    }
}