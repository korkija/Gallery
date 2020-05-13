import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CameraScreen} from '../screens/CameraScreen';
import {PhoneGalleryScreen} from '../screens/PhoneGallery';
import AppTab from './AppTab';

const Stack = createStackNavigator();

const ScreensStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
          // cardStyle: {backgroundColor: 'transparent'},
        }}>
        <Stack.Screen name="AppStack" component={AppTab} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen
          name="PhoneGalleryScreen"
          component={PhoneGalleryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreensStack;
