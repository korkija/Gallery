/**
 * Screen for selecting a picture.
 */

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setPhoto} from '../../redux/actions/photo';
import giphy from '../../assets/index';
import {ButtonCustom} from '../../components/ButtonCustom/ButtonCustom';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const heightWidth = Math.min(windowHeight, windowWidth);

export const AddPhotoScreen = ({navigation}) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  let disable = !image;

  const chooseGallery = () => {
    navigation.navigate('PhoneGalleryScreen', {
      takePicture: takePictureFromGallery,
    });
  };

  const takePictureFromGallery = url => {
    const dateNow = new Date(Date.now()).toLocaleString();
    setImage({url: url, date: dateNow});
  };

  const chooseCamera = () => {
    navigation.navigate('CameraScreen', {
      takePicture: takePicture,
    });
  };
  const takePicture = data => {
    setImage(data);
  };

  const cancel = () => {
    setImage(null);
  };

  const addPhoto = () => {
    if (image) {
      dispatch(setPhoto({url: image.url, date: image.date}));
      setImage(null);
    }
  };

  return (
    <ScrollView>
      <View style={stylesMain.container}>
        <View style={stylesMain.content}>
          <Image
            source={image ? {uri: image.url} : giphy.giphy}
            style={stylesMain.photoPlaceholder}
          />
          <Text>{image ? image.date : 'Сhoose a photo'}</Text>
        </View>
        <View>
          <ButtonCustom title="Camera" onPress={chooseCamera} />
          <ButtonCustom title="Gallery" onPress={chooseGallery} />
          <ButtonCustom title="Cancel" onPress={cancel} disabled={disable} />
          <ButtonCustom title="Add" onPress={addPhoto} disabled={disable} />
        </View>
      </View>
    </ScrollView>
  );
};
const stylesMain = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  photoPlaceholder: {
    resizeMode: 'cover',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: heightWidth * 0.7,
    height: heightWidth * 0.7,
    borderRadius: 10,
    marginBottom: 10,
  },
});
