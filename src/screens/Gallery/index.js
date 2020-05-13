import SplashScreen from 'react-native-splash-screen';
import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {ListPhotos} from '../../components/ListPhotos/ListPhotos';
import {getListPhotos} from '../../redux/actions/photo';

class GalleryScreen extends Component {
  componentDidMount() {
    this.props.getListPhotos();
    SplashScreen.hide();
  }

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
