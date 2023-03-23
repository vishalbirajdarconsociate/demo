import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Navbar() {
    const Stack = createStackNavigator();

    return (
        <View>
            <Text>navbar</Text>
        </View>
    )
}