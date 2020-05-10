import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';

interface InventoryProps {
  navigation: Navigation;
}

export const SelectPhoto: React.FC<InventoryProps> = ({navigation}) => {
  const delRef = useRef(null);
  const [image, setImage] = useState(null);
  // const [dateImage, setDateImage] = useState('');

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

  return (
    <SafeAreaView style={{height: '100%'}}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: 20,
            marginTop: 20,
            backgroundColor: 'green',
          }}>
          <TouchableOpacity
            onPress={() => {
              delRef.current.open();
            }}>
            <Image
              source={image ? {uri: image.url} : require('../../assets/giphy.gif')}
              style={photoPlaceholder}
              resizeMode={'stretch'}
            />
          </TouchableOpacity>
          {!!image && <Text>{image.date}</Text>}
        </View>

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
      </ScrollView>
    </SafeAreaView>
  );
};
const stylesMain = StyleSheet.create({
  touchContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'yellow',
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    height: 80,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.4,
    marginBottom: 10,
  },
  photoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: 'rgba(240,240,240,1)',
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
