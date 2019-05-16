import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.updateData = this.updateData.bind(this);
  }

  render() {
    return(
      <View style={styles.layout} navigation={this.props.navigation}>
        <Text style={[styles.text, styles.title]}>Welcome Back!</Text>
        <Text style={styles.text}>Log in with</Text>
        <View style={styles.socialButtons}>
          <Image source={require('../../assets/images/social-button-3.png')} />
          <Image style={styles.socialButtonCenter} source={require('../../assets/images/social-button-2.png')} />
          <Image source={require('../../assets/images/social-button-1.png')} />
        </View>
        <Text style={styles.text}>or</Text>
        <View style={styles.socialButtons}>
          <Input label={'Email'} keyboardType={'email-address'} name={'email'} handleChangeText={this.updateData} autoCapitalize={'none'} />
          <Input label={'Password'} secureTextEntry={true} name={'password'} handleChangeText={this.updateData} autoCapitalize={'none'} />
        </View>
        <Button text="Sign up" touchableStyle={styles.touchableStyle} buttonStyle={styles.button} textStyle={styles.buttonText} onPress={() => this.signIn()} />
        <View style={styles.alreadyOnboard}>
          <Text style={styles.text}>Already onboard? <Text style={styles.loginText}>Login</Text></Text>
        </View>
      </View>
    );
  }

  updateData(text, name) {
    var newState = Object.assign({}, this.state);
    newState[name] = text;
    this.setState(newState);
  }

  signIn() {
    console.log(this.state);
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
    marginBottom: 20,
    marginTop: 60,
    width: '100%',
  },
  title: {
    fontSize: 26,
  },
  lightText: {
    color: 'rgba(0,0,0,0.5)',
  },
  label: {
    color: 'rgba(0,0,0,0.25)',
    fontSize: 16,
  },
  input: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    height: 20,
    marginBottom: 40,
  }
});
