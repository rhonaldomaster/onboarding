import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      name: ''
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  render() {
    return (
      <View>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          value={this.props.text}
          onChangeText={this.handleChangeText}
          name={this.props.name}
          style={styles.input}
          autoCapitalize={this.props.autoCapitalize}
          keyboardType={this.props.keyboardType} />
      </View>
    );
  }

  handleChangeText(text) {
    this.setState({
      text: text.toString(),
    });
    if (this.props.handleChangeText) {
      this.props.handleChangeText(text, this.props.name);
    }
  }
}

const styles = StyleSheet.create({
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