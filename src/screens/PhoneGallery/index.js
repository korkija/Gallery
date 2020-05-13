import React, {useEffect, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import {ListPhotos} from '../../components/ListPhotos/ListPhotos';
import {Camera} from '../../components/Camera/Camera';

export const PhoneGalleryScreen = ({route}) => {
  const [photosList, setPhotosList] = useState(null);
  const isLoading = !!photosList;

  const takePhotos = async () => {
    const data = await CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
    });

    const arr = data.edges.map(item => {
      return {
        date: moment(new Date(item.node.timestamp), 'LLLL', 'ua').format(
          'YYYY-MM-DD H:m:s',
        ),
        url: item.node.image.uri,
      };
    });
    setPhotosList(arr);
  };

  useEffect(() => {
    takePhotos();
    console.log('mounted');
  }, []);

  // return <View style={styles.container} />;
  console.log('photosList', photosList);
  if (isLoading)
    return (
      <ListPhotos
        style={styles.container}
        takePicture={route.params.takePicture}
        photosList={photosList}
      />
    );
  else return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
