import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Swiper from './Swiper';

export default class Screens extends Component {
  render() {
    return (
      <Swiper navigation={this.props.navigation}>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: '#FFFFFF' }]}>
          <Image source={require('./img/logo.png')} />
        </View>
        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: '#FFFFFF' }]}>
          <Image source={require('./img/logo.png')} />
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: '#FFFFFF' }]}>
          <Image source={require('./img/logo.png')} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
    position: 'relative'
  },
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  skipText: {
    color: '#000000',
    fontFamily: 'Avenir',
    fontSize: 18,
  }
});