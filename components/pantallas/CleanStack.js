import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import Cuenta from "./Cuenta";

const Stack = createNativeStackNavigator();

const CleanStack =  () => {
    return (
       
        
        <NavigationContainer> 
        <Stack.Navigator
            //screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Login Screen tittle" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Cuenta" component={Cuenta} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }


export default CleanStack;