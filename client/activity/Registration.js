import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Registration as RegistrationRequest } from '../helpers/Authentication';

export default class Registration extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            confirmPassword: null,
            name: null,
        }

        this.switchToHomeScreen = this.switchToHomeScreen.bind(this);
        this.switchToLoginScreen = this.switchToLoginScreen.bind(this);
        this.register = this.register.bind(this);
    }

    switchToHomeScreen() {
        const { navigate } = this.props.navigation;

        navigate('Home');
    }

    switchToLoginScreen() {
        const { navigate } = this.props.navigation;

        navigate('Login');
    }

    register() {
        let login = new RegistrationRequest();
        login.setEmail(this.state.email);
        login.setPassword(this.state.password);
        login.setName(this.state.name);
        login.send().then(auth => this.switchToHomeScreen());
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter your name!"
                    onChangeText={(name) => this.setState({ name })}
                />

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

                <TextInput
                    style={{ height: 40 }}
                    placeholder="Confirm your password!"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                />

                <Button
                    title="Register"
                    onPress={this.register}
                />

                <Button
                    title="Login to existing account"
                    onPress={this.switchToLoginScreen}
                />
            </View>
        );
    }
}