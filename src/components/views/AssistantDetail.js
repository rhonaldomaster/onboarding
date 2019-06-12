import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class AssistantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardProps: {
        keyboardType: 'default'
      },
      messages: [],
      step: 0
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', {});
    this.setState({
      messages: [
        {
          _id: + new Date(),
          text: `Hi There, I'm ${data.fullName } 's personal scheduling bot. What is your first and last name?`,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Customer',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }),() => {
      let reply = this.getReplyTo(this.state.messages.length, messages[0].text);
      if (reply == '') {
        return;
      }
      let response = [{
        _id: + new Date(),
        text: reply,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Customer',
          avatar: 'https://placeimg.com/140/140/any',
        },
      }];
      if (this.state.messages.length == 2) {
        response = [].concat([this.getQuickReplyTo(3)], response);
      } else if (this.state.messages.length == 6) {
        response = [].concat([this.getQuickReplyTo(6)]);
      }
      if (this.state.messages.length > 1) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, response),
        }));
      }
    });
  }

  onQuickReply(replies) {
    let reply = '';
    switch (replies[0].value) {
      case 'phone':
        reply = 'Enter your cellphone number:';
        this.setState(previousState => ({
          keyboardProps: {
            keyboardType: 'numeric'
          }
        }));
        break;
      case 'person':
        reply = 'Enter your address:';
        break;
    
      default:
        reply = 'Thanks, your meeting has been scheduled: ' + replies[0].title;
        break;
    }
    if (reply == '') {
      return;
    }
    let response = [
      {
        _id: + new Date(),
        text: reply,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Customer',
          avatar: 'https://placeimg.com/140/140/any',
        },
      }
    ];
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, response),
    }));
  }

  getReplyTo(step, text = '') {
    let reply = '';
    switch (step) {
      case 2:
        reply = 'Thanks ' + text;
        break;
      case 3:
        reply = 'What type of meeting will this be?';
        break;
      case 6:
        reply = 'Select time';
        break;
    
      default:
        break;
    }
    return reply;
  }

  getQuickReplyTo(step) {
    let values = [];
    const { navigation } = this.props;
    const data = navigation.getParam('data', {});
    switch (step) {
      case 3:
        values = [
          {
            title: 'Phone Call',
            value: 'phone',
          },
          {
            title: 'In-Person',
            value: 'person',
          },
        ];
        break;
      case 6:
        values = data.availability.map((item) => {
          return {
            title: item.day + ' ' + item.time,
            value: item.day + ' ' + item.time
          };
        });
        break;
      default:
        break;
    }
    if (step == 6) {
      this.setState(previousState => ({
        keyboardProps: {
          keyboardType: 'default'
        }
      }));
    }
    let reply = {
      _id: + new Date(Date.now() + 1000),
      text: this.getReplyTo(step),
      createdAt: new Date(Date.now() + 1000),
      user: {
        _id: 2,
        name: 'Customer',
        avatar: 'https://placeimg.com/140/140/any',
      }
    };
    if (values.length > 0) {
      reply.quickReplies = {
        type: 'radio',
        values: values
      };
    }
    return reply;
  }

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', {});
    return (
      <View style={[{flex: 1}]}>
        <Text style={styles.title}>Chat with {data.fullName}</Text>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          onQuickReply={replies => this.onQuickReply(replies)}
          textInputProps={this.state.keyboardProps}
          user={{
            _id: data.id,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 125,
    width: 125
  },
  title: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 40,
    textAlign: 'center',
  },
});