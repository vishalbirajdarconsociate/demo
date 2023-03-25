import { View, Text } from 'react-native'

import React from 'react'
import Navbar from './comp/navbar';
import Movielist from './comp/movielist';
export default function App() {
  return (
    <View>
      <Navbar />
      <Movielist />
    </View>
  );
}