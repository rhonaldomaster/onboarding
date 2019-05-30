import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default class Spinner extends Component {
  render () {
    if (! this.props.visible) {
      return (
        <View></View>
      );
    }
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={this.props.size || 'large'} />
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  }
};