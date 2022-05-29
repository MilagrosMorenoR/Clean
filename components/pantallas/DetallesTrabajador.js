import React, { Component, useState } from "react";
import { Text } from "react-native";
import {
  Heading,
  Input,
  Center,
  NativeBaseProvider,
  NativeProvider,
  Button,
  Box,
  AspectRatio,
  Image,
  Stack,
  HStack,
  ScrollView,
  FlatList,
  View,
  Pressable,
  selected,
  Icon,
  Link,
  VStack,
  FormControl,
  Avatar,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const DetallesTrabajador = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Box backgroundColor={"#FFFFFF"} pt={5}>
          <Center>
        <Avatar
          bg="green.500"
          size="xl"
          justifyContent={"center"}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          AJ
        </Avatar>
        ⭐⭐⭐⭐
        </Center>

        <HStack pt={5} paddingLeft={2}>
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
          <Text style={{ color: "#000000" }} size="lg"> Amaia Gutierrez </Text>
        </HStack>

        <HStack pt={5} paddingLeft={2}>
          <Icon
            as={<MaterialIcons name="phone" />}
            size={5}
            ml="2"
            color="muted.400"
          />
          <Text style={{ color: "#000000" }} size="lg"> 4493467636 </Text>
        </HStack>
        <Box paddingLeft={5} paddingTop={3}>
        <Text>Reseñas: </Text>
        <Text>Después de cada servicio, los usuarios tienen la oportunidad de calificar con 1 a 5 estrellas, según su experiencia. Las calificaciones son anónimas. No verás las calificaciones individuales asociadas con una persona. </Text>
        </Box>
      </Box>

      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}></Center>
        <HStack bg="#03cffc" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>

          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => navigation.navigate("MisServicios")}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "account" : "account-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Mis servicios
              </Text>
            </Center>
          </Pressable>

          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => navigation.navigate("Cuenta")}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "account" : "account-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Cuenta
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default DetallesTrabajador;
