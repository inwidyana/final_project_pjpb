import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Login as LoginRequest } from '../helpers/Authentication';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
        }

        this.switchToRegistrationScreen = this.switchToRegistrationScreen.bind(this);
    }

    login() {
        let login = new LoginRequest();
        login.setEmail(this.state.email);
        login.setPassword(this.state.password);
        login.send().then(auth => this.switchToHomeScreen());
    }

    switchToHomeScreen() {
        const { navigate } = this.props.navigation;

        navigate('Home');
    }

    switchToRegistrationScreen() {
        const { navigate } = this.props.navigation;

        navigate('Registration');
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter your email address!"
                    onChangeText={(email) => this.setState({ email })}
                />

                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter your password!"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button
                    title="Login"
                    onPress={this.login}
                />

                <Button
                    title="Register a new account"
                    onPress={this.switchToRegistrationScreen}
                />
            </View>
        );
    }
}