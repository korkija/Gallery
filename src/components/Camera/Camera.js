import React from 'react';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';

const PendingView = () => <Text style={stylesMain.waiting}>Waiting</Text>;

export const Camera = ({takePicture}) => {
  const navigation = useNavigation();

  const takePhoto = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    const dateNow = moment(new Date(Date.now()), 'YYYY-MM-DD H:m:s').format(
      'YYYY-MM-DD H:m:s',
    );
    takePicture({url: data.uri, date: dateNow});
    navigation.navigate('addPhotoScreen');
  };

  return (
    <RNCamera
      style={[stylesMain.preview]}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.auto}
      defaultTouchToFocus
      permissionDialogTitle={'Permission to use camera'}
      permissionDialogMessage={
        'We need your permission to use your camera phone'
      }
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}>
      {({camera, status, recordAudioPermissionStatus}) => {
        if (status !== 'READY') {
          return <PendingView />;
        }
        return (
          <View style={stylesMain.camera}>
            <TouchableOpacity
              onPress={() => takePhoto(camera)}
              style={stylesMain.capture}>
              <Text style={stylesMain.cameraButton}> SNAP </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </RNCamera>
  );
};
const stylesMain = StyleSheet.create({
  preview: {
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
  waiting: {
    flex: 1,
    fontSize: 24,
    fontFamily: 'Arial',
    // resizeMode: 'cover',
    width: '100%',
    backgroundColor: 'lightgreen',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  camera: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cameraButton: {
    fontSize: 14,
  },
});
