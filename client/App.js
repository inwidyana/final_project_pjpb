import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }
    
    const ws = new WebSocket('ws://192.168.43.61:8080');

    ws.onopen = () => {
      console.log('connected to webserver');
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{ this.state.message }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
