import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image
} from 'react-native';

export default class ImagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.generateFromResponse = this.generateFromResponse.bind(this);
  }

  componentDidMount() {
    let data = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    };
    fetch('https://picsum.photos/v2/list', data)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.generateFromResponse(data);
      })
      .catch((error) => {
        console.error(error);
      });
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
          numColumns={3}
        />
      </View>
    );
  }

  keyExtractor(item, id) {
    return item.id;
  }

  generateFromResponse(data) {
    this.setState({
      items: data
    });
  }

  renderItem({item}) {
    return (
      <Image id={item.id} source={{ uri: item.download_url }} style={styles.imageStyle} />
    );
  }
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