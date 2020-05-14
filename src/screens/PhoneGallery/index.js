/**
 * Screen for phone gallery.
 * with paging on FlatList
 */

import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ListPhotos} from '../../components/ListPhotos/ListPhotos';
import {getPhotosPhone} from '../../redux/actions/photo';
import {useDispatch, useSelector} from 'react-redux';

export const PhoneGalleryScreen = ({route}) => {
  const photosPhoneList = useSelector(state => state.photosPhoneList);
  const dispatch = useDispatch();
  const isLoading = !!photosPhoneList;

  useEffect(() => {
    dispatch(getPhotosPhone());
  }, [dispatch]);
  if (isLoading) {
    return (
      <ListPhotos
        style={styles.container}
        takePicture={route.params.takePicture}
        photosList={photosPhoneList}
        getNewData={() => dispatch(getPhotosPhone())}
      />
    );
  } else {
    return <View style={styles.container} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
