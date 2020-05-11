import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {setPhoto} from '../../redux/actions/photo';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const heightWidth = windowWidth <= windowHeight ? windowWidth : windowHeight;

export const SelectPhoto: React.FC<InventoryProps> = () => {
  const delRef = useRef(null);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const chooseGallery = () => {
    console.log('chooseGallery');
    let options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response);
        const dateNow = new Date(Date.now()).toLocaleString();
        setImage({url: response.uri, date: dateNow});
      }
    });
  };
  const chooseCamera = () => {
    let options = {};
    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response);
        const dateNow = new Date(Date.now()).toLocaleString();
        setImage({url: response.uri, date: dateNow});
      }
    });
  };

  const cancel = () => {
    setImage(null);
  };
  const addPhoto = () => {
    dispatch(setPhoto({url: image.url, date: image.date}));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesMain.container}>
          <View style={stylesMain.content}>
            <TouchableOpacity
              onPress={() => {
                delRef.current.open();
              }}>
              <Image
                source={
                  image ? {uri: image.url} : require('../../assets/giphy.gif')
                }
                style={photoPlaceholder}
              />
            </TouchableOpacity>
            {image ? <Text>{image.date}</Text> : <Text>Сhoose a photo</Text>}
          </View>
          <View>
            <TouchableOpacity
              onPress={chooseCamera}
              style={stylesMain.touchContainer}>
              <Text style={{fontSize: 22}}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={chooseGallery}
              style={[stylesMain.touchContainer, {marginTop: 5}]}>
              <Text style={{fontSize: 22}}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancel}
              style={[stylesMain.touchContainer, {marginTop: 5}]}>
              <Text style={{fontSize: 22}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={addPhoto}
              style={[stylesMain.touchContainer, {marginTop: 5}]}>
              <Text style={{fontSize: 22}}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const stylesMain = StyleSheet.create({
  touchContainer: {
    marginTop: 5,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 20,
    // backgroundColor: 'green',
  },
  content: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'yellow',
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
  topBarContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(118,118,118,1)',
    marginTop: 20,
    width: 150,
    marginRight: 20,
    marginBottom: 10,
  },
  clearAllStyle: {
    marginRight: 20,
    height: '80%',
    justifyContent: 'center',
  },
  clearAllText: {
    fontSize: 20,
    fontWeight: '700',
  },
  burgerIcon: {
    width: 25,
    height: 15,
    marginLeft: 20,
  },
});

const {photoPlaceholder} = stylesMain;
