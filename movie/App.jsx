import { View, Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'
import Navbar from './comp/navbar';
import Movielist from './comp/movielist';
export default function App() {
  return (
    <View>
      <Navbar />
      <Movielist />
      <Text>App</Text>
    </View>
  );
}