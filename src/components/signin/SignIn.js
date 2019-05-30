import { SIGNIN_URL } from '../../constants';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';
import Spinner from '../common/Spinner';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false,
      password: '',
      showError: false
    };
    this.updateData = this.updateData.bind(this);
  }

  render() {
    return(
      <View style={styles.layout} navigation={this.props.navigation}>
        <Spinner visible={this.state.loading}/>
        <Text style={[styles.text, styles.title]}>Welcome Back!</Text>
        <Text style={styles.text}>Log in with</Text>
        <View style={styles.socialButtons}>
          <Image source={require('../../assets/images/social-button-3.png')} />
          <Image style={styles.socialButtonCenter} source={require('../../assets/images/social-button-2.png')} />
          <Image source={require('../../assets/images/social-button-1.png')} />
        </View>
        <Text style={styles.text}>or</Text>
        <View style={styles.inputForm}>
          <Input label={'Email'} keyboardType={'email-address'} name={'email'} handleChangeText={this.updateData} autoCapitalize={'none'} />
          <Input label={'Password'} secureTextEntry={true} name={'password'} handleChangeText={this.updateData} autoCapitalize={'none'} />
        </View>
        <Button text="Sign in" touchableStyle={styles.touchableStyle} buttonStyle={styles.button} textStyle={styles.buttonText} onPress={() => this.signIn()} />
        {
          this.state.showError &&
          <Text style={styles.loginText}>Invalid email or password</Text>
        }
        <View style={styles.alreadyOnboard}>
          <Text style={styles.text}>Need an account? <Text style={styles.loginText} onPress={() => this.goToSignUp()}>Sign up</Text></Text>
        </View>
      </View>
    );
  }

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  updateData(text, name) {
    var newState = Object.assign({}, this.state);
    newState[name] = text;
    this.setState(newState);
  }

  signIn() {
    let newState = Object.assign({}, this.state, { loading: true, showError: false });
    this.setState(newState);
    let data = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session: {
          email: this.state.email,
          password: this.state.password
        }
      })
    };
    fetch(SIGNIN_URL, data)
      .then((response) => {
        if (response.status == 200) {
          this.props.navigation.navigate('ImagesList');
          return;
        }
        let newState = Object.assign({}, this.state, { loading: false, showError: true });
        this.setState(newState);
      })
      .catch((error) => {
        let newState = Object.assign({}, this.state, { loading: false, showError: true });
        this.setState(newState);
        console.error(error);
      });
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
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 40,
    maxHeight: 60,
    maxWidth: '100%',
  },
  inputForm: {
    marginBottom: 20,
    marginTop: 20,
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
