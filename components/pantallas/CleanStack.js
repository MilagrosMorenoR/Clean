import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createNativeStackNavigator();

const CleanStack =  () => {
    return (
       
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        > 
            <Stack.Screen
                name="Login Screen tittle"
                component={LoginScreen}
            />
            <Stack.Screen
                name="Register Screen"
                component={RegisterScreen}
            />

        </Stack.Navigator>


    );
}

export default CleanStack;