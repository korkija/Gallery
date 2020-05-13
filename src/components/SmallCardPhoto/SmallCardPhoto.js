import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export const SmallCardPhoto = ({url, date, onPress}) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const dateForView = moment(date, 'YYYY-MM-DD H:m:s', 'ua').format(
    'ddd DD MMM YYYY HH:mm',
  );
  const onPressBack = urlPhoto => {
    onPress(urlPhoto);
    navigation.navigate('addPhotoScreen');
  };

  const LoadEnd = () => {
    setIsLoading(false);
  };
  return (
    <View style={styles.containerCard}>
      <TouchableOpacity disabled={!onPress} onPress={() => onPressBack(url)}>
        <View style={styles.containerImage}>
          {isLoading && (
            <ActivityIndicator
              style={StyleSheet.absoluteFill}
              size="large"
              color="#000000"
            />
          )}
          <Image
            style={styles.images}
            onLoadEnd={LoadEnd}
            source={url.length ? {uri: url} : url}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.textName}>{dateForView}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    height: windowWidth * 0.6,
  },
  images: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
    borderRadius: 5,
  },
  containerCard: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flex: 1,
    flexDirection: 'column',
  },
  textName: {
    textAlign: 'center',
    fontSize: 18,
  },
});
