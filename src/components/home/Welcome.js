import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';
import Button from '../common/Button';

export default class Welcome extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} navigation={this.props.navigation}>
        <ImageBackground source={require('../../assets/images/background.png')} style={styles.layout}>
          <Text style={styles.title}>Welcome to Latvia 100</Text>
          <Text style={styles.text}>In 2018 Latvia is celebrating the 100th aniversary and we selected the best things and places to visit!</Text>
          <Button text="Get started" touchableStyle={styles.touchableStyle} buttonStyle={styles.button} textStyle={styles.buttonText} onPress={() => this.goToSignIn()}/>
        </ImageBackground>
      </View>
    );
  }

  goToSignIn = () => {
    this.props.navigation.navigate('SignInUP');
  }
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 16,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  touchableStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    bottom: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 40,
    position: 'absolute',
    right: 0,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.15)',
    borderRadius: 10,
    borderWidth: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center'
  }
});