import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Login as LoginRequest } from '../helpers/Authentication';

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: "80%",
        height: "8%",
        padding: 10,
        marginBottom: 10,
    },
});

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
            <View style = {styles.container}>
                <TextInput
                    style={styles.input}
                    selectionColor={BLUE}
                    underlineColorAndroid={LIGHT_GRAY}
                    placeholder="Enter your email address!"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    style={styles.input}
                    selectionColor={BLUE}
                    underlineColorAndroid={LIGHT_GRAY}
                    placeholder="Enter your password!"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <View>
                    <Button
                        title="Login"
                        onPress={this.login}
                    />
                    <View style={{flex: 0.1}}/>
                    <Button
                        title="Register a new account"
                        onPress={this.switchToRegistrationScreen}
                    />
                </View>
            </View>
        );
    }
}