import React from 'react';
import {Text, StyleSheet, Dimensions, View, Image} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const SmallCardPhoto = ({url, date}) => {
  console.log('url ', url);
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerImage}>
        <Image style={styles.images} source={url} />
      </View>
      <View>
        <Text style={styles.textAuthor}>
          data:
          <Text style={styles.textName}> {date}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    height: windowWidth * 0.6,
  },
  images: {
    borderRadius: 10,
    resizeMode: 'contain',
    width: null,
    height: null,
    flex: 1,
  },
  containerCard: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'column',
  },
  textAuthor: {
    textAlign: 'right',
    fontSize: 12,
    color: 'white',
  },
  textName: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});
