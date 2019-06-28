import React, { Component } from 'react';
import Keypair from '../helpers/Keypair';
import { StyleSheet, Button, TextInput, View, Spacer } from 'react-native';
import { Registration as RegistrationRequest } from '../helpers/Authentication';

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
        login.send().then((auth) => {
            this._storeData();
            Keypair.generate().store();
            this.switchToHomeScreen()
        });
    }

    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <TextInput
    //                 style={{ height: 40 }}
    //                 placeholder="Enter your name!"
    //                 onChangeText={(name) => this.setState({ name })}
    //             />

    //             <TextInput
    //                 style={{ height: 40 }}
    //                 placeholder="Enter your email address!"
    //                 onChangeText={(email) => this.setState({ email })}
    //             />

    //             <TextInput
    //                 style={{ height: 40 }}
    //                 placeholder="Enter your password!"
    //                 autoCorrect={false}
    //                 secureTextEntry={true}
    //                 onChangeText={(password) => this.setState({ password })}
    //             />

    //             <TextInput
    //                 style={{ height: 40 }}
    //                 placeholder="Confirm your password!"
    //                 autoCorrect={false}
    //                 secureTextEntry={true}
    //                 onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
    //             />

    //             <Button
    //                 title="Register"
    //                 onPress={this.register}
    //             />

    //             <Button
    //                 title="Login to existing account"
    //                 onPress={this.switchToLoginScreen}
    //             />
    //         </View>
    //     );
    // }

    render() {
        return (
            <View style = {styles.container}>
                <TextInput
                    style = {styles.input}
                    selectionColor={BLUE}
                    underlineColorAndroid={LIGHT_GRAY}
                    placeholder = 'Enter your name!'
                    onChangeText = {(name) => this.setState({ name })}
                />
                <TextInput
                    style = {styles.input}
                    selectionColor={BLUE}
                    underlineColorAndroid={LIGHT_GRAY}
                    placeholder = 'Enter your email address!'
                    onChangeText = {(email) => this.setState({ email })}
                />
                <TextInput
                    style = {styles.input}
                    selectionColor={BLUE}
                    underlineColorAndroid={LIGHT_GRAY}
                    placeholder = 'Enter your password!'
                    onChangeText = {(password) => this.setState({ password })}
                />
                <TextInput
                    style = {styles.input}
                    selectionColor={BLUE}
                    underlineColorAndroid={LIGHT_GRAY}
                    placeholder = 'Confirm your password!'
                    onChangeText = {(confirmPassword) => this.setState({ confirmPassword })}
                />
                <View>
                    <Button
                        title = "Register"
                        onPress = {this.register}
                    />
                    <View style={{flex: 0.1}}/>
                    <Button
                        title = "Login to existing account"
                        onPress = {this.switchToLoginScreen}
                    />
                </View>
            </View>
        );
    }
}