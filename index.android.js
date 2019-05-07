import React, { Component } from 'react';
import {
  AppRegistry,    // Registers the app
  StatusBar,      // Allows to hide the satatus bar
} from 'react-native';
import HomeScreen from './Screens';
import SignInUPScreen from './SignInUP';
import WelcomeScreen from './Welcome';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SignInUP: SignInUPScreen,
    Welcome: WelcomeScreen
  },
  {
    initialRouteName: "SignInUP"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Onboarding extends Component {
  componentDidMount() {
    // Hide the status bar
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <AppContainer />
    );
  }
}

AppRegistry.registerComponent('Onboarding', () => Onboarding);