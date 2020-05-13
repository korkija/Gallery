import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddPhotoScreen, GalleryScreenConnect} from '../screens';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
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
  );
};

export default AppTab;
