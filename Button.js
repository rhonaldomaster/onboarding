/**
 * Button component
 * Renders a button and calls a function passed via onPress prop once tapped
 */

import React, { Component } from 'react';
import {
  StyleSheet,       // CSS-like styles
  Text,             // Renders text
  TouchableOpacity, // Pressable container
  View              // Container component
} from 'react-native';

export default class Button extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress} style={this.props.touchableStyle ? this.props.touchableStyle : {}}>
        <View style={this.props.buttonStyle ? this.props.buttonStyle : styles.button}>
          <Text style={this.props.textStyle ? this.props.style : styles.text}>{this.props.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 50,         // Rounded border
    borderWidth: 0,           // 2 point border widht
    borderColor: '#FFFFFF',   // White colored border
    paddingHorizontal: 20,    // Horizontal padding
    paddingVertical: 10,      // Vertical padding
  },
  // Button text
  text: {
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
});