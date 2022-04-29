import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator

const MainStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name = 'Home'
                component = {Home} 
            />
             <Stack.Screen
                name = 'LoginScreen'
                component = {Home} 
            />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack
