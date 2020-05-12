import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {setPhoto} from '../../redux/actions/photo';
import {ButtonCustom} from '../ButtonCustom/ButtonCustom';
// import {RNCamera} from 'react-native-camera';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const heightWidth = Math.min(windowHeight, windowWidth);

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

export const SelectPhoto = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  let disable = !image;

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
  const takePicture = async function(camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
    const dateNow = new Date(Date.now()).toLocaleString();
    setImage({url: data.uri, date: dateNow});
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
            source={
              image ? {uri: image.url} : require('../../assets/giphy.gif')
            }
            style={photoPlaceholder}
          />
          <Text>{image ? image.date : 'Сhoose a photo'}</Text>
        </View>
        <View>
          <ButtonCustom title="Camera" onPress={chooseCamera} />
          {/*<ButtonCustom title="Camera2" onPress={chooseCamera2} />*/}
          <ButtonCustom title="Gallery" onPress={chooseGallery} />
          <ButtonCustom title="Cancel" onPress={cancel} disabled={disable} />
          <ButtonCustom title="Add" onPress={addPhoto} disabled={disable} />
        </View>
      </View>
      {/*<RNCamera*/}
      {/*  style={stylesMain.preview}*/}
      {/*  type={RNCamera.Constants.Type.back}*/}
      {/*  flashMode={RNCamera.Constants.FlashMode.on}*/}
      {/*  androidCameraPermissionOptions={{*/}
      {/*    title: 'Permission to use camera',*/}
      {/*    message: 'We need your permission to use your camera',*/}
      {/*    buttonPositive: 'Ok',*/}
      {/*    buttonNegative: 'Cancel',*/}
      {/*  }}*/}
      {/*  androidRecordAudioPermissionOptions={{*/}
      {/*    title: 'Permission to use audio recording',*/}
      {/*    message: 'We need your permission to use your audio',*/}
      {/*    buttonPositive: 'Ok',*/}
      {/*    buttonNegative: 'Cancel',*/}
      {/*  }}>*/}
      {/*  {({camera, status, recordAudioPermissionStatus}) => {*/}
      {/*    if (status !== 'READY') return <PendingView />;*/}
      {/*    return (*/}
      {/*      <View*/}
      {/*        style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>*/}
      {/*        <TouchableOpacity*/}
      {/*          onPress={() => takePicture(camera)}*/}
      {/*          style={stylesMain.capture}>*/}
      {/*          <Text style={{fontSize: 14}}> SNAP </Text>*/}
      {/*        </TouchableOpacity>*/}
      {/*      </View>*/}
      {/*    );*/}
      {/*  }}*/}
      {/*</RNCamera>*/}
    </ScrollView>
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
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

const {photoPlaceholder} = stylesMain;
