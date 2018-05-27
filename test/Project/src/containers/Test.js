import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Strings from '../constants/strings';

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
          <Text>Open up App.js sad to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.sadas</Text>
          <Text>{Strings.Browse}</Text>

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
  