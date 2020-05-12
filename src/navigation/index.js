import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import {AddPhotoScreen, GalleryScreenConnect} from '../screens';

const Tab = createBottomTabNavigator();

const ScreensStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
        }}
        tabBarOptions={{
          showIcon: false,
          labelPosition: 'beside-icon',
          labelStyle: {
            fontSize: 20,
          },
        }}>
        <Tab.Screen
          options={{title: 'Gallery'}}
          name="galleryScreen"
          component={GalleryScreenConnect}
        />
        <Tab.Screen
          options={{title: 'Add'}}
          name="addPhotoScreen"
          component={AddPhotoScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ScreensStack;
