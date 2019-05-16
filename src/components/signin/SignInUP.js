import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from '../common/Button';

export default class SignInUP extends Component {
  render() {
    return (
      <View style={styles.layout} navigation={this.props.navigation}>
        <Image source={require('../../assets/images/login-logo.png')} />
        <Text style={[styles.text, styles.preSocialNetworkText]}>Get started with</Text>
        <View style={styles.socialButtons}>
          <Image source={require('../../assets/images/social-button-3.png')} />
          <Image style={styles.socialButtonCenter} source={require('../../assets/images/social-button-2.png')} />
          <Image source={require('../../assets/images/social-button-1.png')} />
        </View>
        <Text style={styles.text}>Or sign up with</Text>
        <Button text="Email" touchableStyle={styles.touchableStyle} buttonStyle={styles.button} textStyle={styles.buttonText} onPress={() => this.goToSignUp()} />
        <View style={styles.alreadyOnboard}>
          <Text style={styles.text}>Already onboard? <Text style={styles.loginText}>Login</Text></Text>
        </View>
      </View>
    );
  }

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 40,
    position: 'relative',
    width: '100%',
  },
  text: {
    color: '#000000',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  preSocialNetworkText: {
    marginTop: 60,
    textAlign: 'left',
  },
  alreadyOnboard: {
    bottom: 60,
    left: 40,
    position: 'absolute',
    textAlign: 'left',
  },
  loginText: {
    color: '#D0021B',
    fontWeight: '600'
  },
  touchableStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#202020',
    borderRadius: 4,
    marginVertical: 20,
  },
  button: {
    borderWidth: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  socialButtons: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 20,
    maxHeight: 60,
    maxWidth: '100%',
  },
  socialButtonCenter: {
    marginHorizontal: 15,
  }
});