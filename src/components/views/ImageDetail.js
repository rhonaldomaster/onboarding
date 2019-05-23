import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking
} from 'react-native';

export default class ImagesDetail extends Component {
  openUrl = (url) => {
    Linking.openURL(url)
  }

  render = () => {
    const { navigation } = this.props;
    const data = navigation.getParam('data', {})
    return (
      <View>
        <Text style={styles.text}>Welcome Back!</Text>
        <Image id={data.id} source={{ uri: data.download_url }} style={styles.imageStyle} />
        <View style={styles.dataContent}>
          <Text style={[styles.text, styles.descriptionText]}>Author: {data.author}</Text>
          <Text style={[styles.text, styles.descriptionText]}>Height: {data.height}</Text>
          <Text style={[styles.text, styles.descriptionText]}>Width: {data.width}</Text>
          <Text style={[styles.text, styles.descriptionText]}>
            URL: <Text style={styles.link} onPress={() => this.openUrl(data.url)}>{data.url}</Text>
          </Text>
          <Text style={[styles.text, styles.descriptionText]}>
            Download URL: <Text style={styles.link} onPress={() => this.openUrl(data.download_url)}>{data.download_url}</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 250,
    marginBottom: 20,
    width: '100%',
  },
  text: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 40,
    textAlign: 'center',
  },
  dataContent: {
    paddingHorizontal: 40,
  },
  descriptionText: {
    marginTop: 10,
    textAlign: 'left',
  },
  link: {
    color: '#D0021B',
    textDecorationLine: 'underline',
  }
});