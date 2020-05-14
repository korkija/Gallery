/**
 * App Gallery.
 * You can add pictures from the phone gallery
 * or by taking a picture of the camera
 */

import React from 'react';
import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';
import {store} from './src/redux/store';
import ScreensStack from './src/navigation';

YellowBox.ignoreWarnings(['Remote debugger']);
console.disableYellowBox = true;

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ScreensStack />
    </Provider>
  );
};

export default App;
