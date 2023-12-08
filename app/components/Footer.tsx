import { View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from '../screens/All';
import Today from '../screens/Today';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function Footer() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#b7f0ad',
        tabBarActiveBackgroundColor: '#000',
        tabBarInactiveBackgroundColor: '#000',
        headerBackground: () => (
          <View
            style={{
              backgroundColor: '#000',
              flex: 1,
            }}
          />
        ),
        tabBarStyle: {
          // padding to bottom of screen
          height: 120,
          paddingTop: 10,
          paddingBottom: 50,
          borderTopWidth: 0,
          backgroundColor: '#000',
        },
        headerTintColor: '#b7f0ad',
      }}
    >
      <Tab.Screen name="all habits" component={All} />
      <Tab.Screen name="today" component={Today} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
}
