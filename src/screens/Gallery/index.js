import SplashScreen from 'react-native-splash-screen';
import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
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
      return <Text>А ничего и не выросло</Text>;
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View style={styles.welcomeContainer}>
          <ListPhotos photosList={photosList} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  imageSplashScreen: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
  textSplashScreen: {
    color: 'yellow',
    fontSize: 26,
  },
});

const mapStateToProps = state => {
  console.log(state);
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
