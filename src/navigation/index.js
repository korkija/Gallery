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
          activeTintColor: '#ffffff',
          inactiveTintColor: '#2F2E2E',
          activeBackgroundColor: '#2F2E2E',
          inactiveBackgroundColor: '#ffffff',
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: () => <Text style={styles.text}>Gallery</Text>,
          }}
          name="galleryScreen"
          component={GalleryScreenConnect}
        />
        <Tab.Screen
          options={{
            tabBarLabel: () => <Text style={styles.text}>ADD</Text>,
          }}
          name="addPhotoScreen"
          component={AddPhotoScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ScreensStack;
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 26,
  },
});
