import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from '../screens/All';
import Today from '../screens/Today';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function Footer() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

