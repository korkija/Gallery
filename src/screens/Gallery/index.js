import SplashScreen from 'react-native-splash-screen';
import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Text, Image, Platform, StatusBar} from 'react-native';

export class GalleryScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      // <Fragment>
      //   {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}

      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        {/*<Image*/}
        {/*  style={styles.imageSplashScreen}*/}
        {/*  source={require('../../assets/img/smoke.gif')}*/}
        {/*/>*/}
        <Text style={styles.textSplashScreen}>Hello Gallery</Text>
      </View>
      // </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  // content1: {
  //   flex: 1,
  //   backgroundColor: 'green',
  // },
  // content2: {
  //   flex: 1,
  //   backgroundColor: 'yellow',
  // },
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
