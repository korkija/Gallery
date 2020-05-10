/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import ScreensStack from './src/navigation';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ScreensStack />
    </Provider>
  );
};

export default App;
