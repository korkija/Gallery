import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {AddPhotoScreen, GalleryScreen} from '../screens';

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
          activeTintColor: '#B5B5B5',
          inactiveTintColor: '#2F2E2E',
          activeBackgroundColor: '#2F2E2E',
          inactiveBackgroundColor: '#B5B5B5',
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: () => <Text style={{fontSize: 26}}>Gallery</Text>,
          }}
          name="galleryScreen"
          component={GalleryScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: () => <Text style={{fontSize: 26}}>ADD</Text>,
          }}
          name="addPhotoScreen"
          component={AddPhotoScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ScreensStack;
