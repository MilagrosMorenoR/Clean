import React from 'react'
import { createAppContainer } from "react-native-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import SplashScreen from '@screens/SplashScreen'
import LoginScreen from '@screens/LoginScreen'
import { View } from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = 'Login'
        component={SplashScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default MainStack
