import React, { Component } from 'react';
import {
  AppRegistry,    // Registers the app
  StatusBar,      // Allows to hide the satatus bar
} from 'react-native';
import HomeScreen from './src/components/index/Screens';
import SignInUPScreen from './src/components/signin/SignInUP';
import SignInScreen from './src/components/signin/SignIn';
import SignUpScreen from './src/components/signin/Signup';
import WelcomeScreen from './src/components/home/Welcome';
import ImagesListScreen from './src/components/views/ImagesList';
import ImageDetailScreen from './src/components/views/ImageDetail';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SignInUP: SignInUPScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    Welcome: WelcomeScreen,
    ImagesList: ImagesListScreen,
    ImageDetail: ImageDetailScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
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