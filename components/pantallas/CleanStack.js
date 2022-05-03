import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import Cuenta from "./Cuenta";
import MisServicios from "./MisServicios";
import Paquetes from "./Paquetes";
import DetallesTrabajador from "./DetallesTrabajador";

const Stack = createNativeStackNavigator();

const CleanStack =  () => {
    return (
       
        
        <NavigationContainer> 
        <Stack.Navigator
            //screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Cuenta" component={Cuenta} />
          <Stack.Screen name="MisServicios" component={MisServicios} />
          <Stack.Screen name="Paquetes" component={Paquetes} />
          <Stack.Screen name="DetallesTrabajador" component={DetallesTrabajador}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }


export default CleanStack;