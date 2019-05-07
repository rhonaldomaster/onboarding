import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class SignInUP extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 40 }} navigation={this.props.navigation}>
        <Image source={require('./img/login-logo.png')} />
        <Text style={[styles.text, styles.preSocialNetworkText]}>Get started with</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  preSocialNetworkText: {
    marginVertical: 60,
    textAlign: 'left',
  }
});