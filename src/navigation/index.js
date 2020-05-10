import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AddPhotoScreen, GalleryScreen} from '../screens';

const Stack = createStackNavigator();

const ScreensStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
        }}>
        <Stack.Screen
          options={{title: 'Gallery'}}
          name="galleryScreen"
          component={GalleryScreen}
        />
        <Stack.Screen
          options={{title: 'App Photo'}}
          name="addPhotoScreen"
          component={AddPhotoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreensStack;
