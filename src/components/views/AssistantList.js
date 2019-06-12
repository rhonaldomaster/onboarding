import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import assistantData from '../common/AssistantData.json';

export default class AssistantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({
      items: assistantData.users
    });
  }

  keyExtractor(item, id) {
    return item.id;
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.viewDetails(item)}>
        <Image id={item.id} source={{ uri: item.avatar }} style={styles.imageStyle} />
        <Text>{item.fullName}</Text>
      </TouchableOpacity>
    );
  }

  viewDetails = (item) => {
    this.props.navigation.navigate('AssistantDetail', { data: item });
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Welcome Back!</Text>
        <FlatList
          navigation={this.props.navigation}
          renderItem={this.renderItem}
          data={this.state.items}
          keyExtractor={this.keyExtractor}
          horizontal={false}
          numColumns={1}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 125,
    width: 125
  },
  text: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 40,
    textAlign: 'center',
  },
});