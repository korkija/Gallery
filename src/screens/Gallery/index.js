/**
 * Screen for Main gallery App.
 */

import SplashScreen from 'react-native-splash-screen';
import React, {Component} from 'react';
import {Text, PermissionsAndroid} from 'react-native';
import {connect} from 'react-redux';
import {ListPhotos} from '../../components/ListPhotos/ListPhotos';
import {getListPhotos} from '../../redux/actions/photo';

const permissionReadExternalStorage = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Access Storage',
        message: 'Access Storage for the pictures',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use read from the storage');
      return true;
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
  return false;
};

class GalleryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {permissionsRead: false};
  }

  componentDidMount() {
    this.props.getListPhotos();
    SplashScreen.hide();
    this.setState({permissionsRead: this.checkPermissions()});
  }

  checkPermissions = async () => {
    const result = await permissionReadExternalStorage();
  };

  render() {
    const {isLoading, photosList} = this.props;

    if (isLoading) {
      return <Text>Loading</Text>;
    }

    return <ListPhotos photosList={photosList} />;
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    photosList: state.photosList,
  };
};

const mapDispatchToProps = {
  getListPhotos,
};
export const GalleryScreenConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GalleryScreen);
