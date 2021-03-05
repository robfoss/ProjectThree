import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeBottomTabNavigator from '../navigation/HomeBottomTabNavigator'

const Stack = createStackNavigator()

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name='Home' component={HomeBottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
