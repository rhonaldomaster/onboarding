import React, { Component } from 'react';
import {
  AppRegistry,    // Registers the app
  StatusBar,      // Allows to hide the satatus bar
} from 'react-native';
import HomeScreen from './src/components/index/Screens';
import SignInUPScreen from './src/components/signin/SignInUP';
import WelcomeScreen from './src/components/home/Welcome';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SignInUP: SignInUPScreen,
    Welcome: WelcomeScreen
  },
  {
    initialRouteName: "Home"
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