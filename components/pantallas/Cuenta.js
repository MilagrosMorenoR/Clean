import React, { useState } from "react";
import { Text } from "react-native";
import {
  Heading,
  Input,
  Popover,
  initialFocusRef,
  FormControl,
  Avatar,
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
  Skeleton,
  Container,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import {auth} from '../pantallas/firebase-config';




const Cuenta = ({ navigation }) => {
  const handleSingOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.navigate('LoginScreen');
    })
    .catch(error => alert(error.message))
  }
  
  return (
    <NativeBaseProvider>
      <Center bg="primary.400">
        <Center
          bg="primary.400"
          _text={{
            color: "white",
            fontWeight: "bold",
          }}
          height={200}
          width={{
            base: 200,
            lg: 250,
          }}
        >
          <Avatar
            bg="green.500"
            size="xl"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          >
            AJ
          </Avatar>
          <Text style={{ color: "#FFFFFF" }}>Jennifer Flores</Text>
          <Text style={{ color: "#FFFFFF" }}>Avanzado</Text>
        </Center>
      </Center>

      <Center backgroundColor={"#FFFFFF"}>
        <ScrollView>
          <Popover
            initialFocusRef={initialFocusRef}
            trigger={(triggerProps) => {
              return (
                <Button size="lg" variant="link" {...triggerProps}>
                  Editar Informacion
                </Button>
              );
            }}
          >
            <Popover.Content width="56">
              <Popover.Arrow />
              <Popover.CloseButton />
              {/* @ts-ignore */}
              <Popover.Header>Detalles Personales</Popover.Header>
              <Popover.Body>
                <FormControl>
                  <FormControl.Label
                    _text={{
                      fontSize: "xs",
                      fontWeight: "medium",
                    }}
                  >
                    Nombre(s)
                  </FormControl.Label>
                  <Input rounded="sm" fontSize="xs" ref={initialFocusRef} />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label
                    _text={{
                      fontSize: "xs",
                      fontWeight: "medium",
                    }}
                  >
                    Apellidos
                  </FormControl.Label>
                  <Input rounded="sm" fontSize="xs" />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label
                    _text={{
                      fontSize: "xs",
                      fontWeight: "medium",
                    }}
                  >
                    Telefono
                  </FormControl.Label>
                  <Input rounded="sm" fontSize="xs" />
                </FormControl>
              </Popover.Body>
              <Popover.Footer>
                <Button.Group>
                  <Button colorScheme="coolGray" variant="ghost">
                    cancelar
                  </Button>
                  <Button>Guardar</Button>
                </Button.Group>
              </Popover.Footer>
            </Popover.Content>
          </Popover>

          <Popover
            initialFocusRef={initialFocusRef}
            trigger={(triggerProps) => {
              return (
                <Button size="lg" variant="link" {...triggerProps}>
                  Cuenta Bancaria
                </Button>
              );
            }}
          >
            <Popover.Content width="56">
              <Popover.Arrow />
              <Popover.CloseButton />
              {/* @ts-ignore */}
              <Popover.Header>Cuenta Bancaria</Popover.Header>
              <Popover.Body>
                <FormControl>
                  <FormControl.Label
                    _text={{
                      fontSize: "xs",
                      fontWeight: "medium",
                    }}
                  >
                    Numero de cuenta
                  </FormControl.Label>
                  <Input rounded="sm" fontSize="xs" ref={initialFocusRef} />
                </FormControl>
              </Popover.Body>
              <Popover.Footer>
                <Button.Group>
                  <Button colorScheme="coolGray" variant="ghost">
                    cancelar
                  </Button>
                  <Button>Guardar</Button>
                </Button.Group>
              </Popover.Footer>
            </Popover.Content>
          </Popover>

          <Button size="lg" variant="link" onPress={handleSingOut}>
            Cerrar Sesión
          </Button>
        </ScrollView>
      </Center>

      <Text>Email: {auth.currentUser?.email} </Text>

      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}></Center>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
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
                Buscar
              </Text>
            </Center>
          </Pressable>

          <Pressable
                opacity={selected === 0 ? 1 : 0.5}
                py="3"
                flex={1}
                onPress={() => navigation.navigate("PublicarServicio")}
              >
                <Center>
                  <Icon
                    mb="1"
                    as={
                      <MaterialCommunityIcons
                        name={selected === 0 ? "Buscar" : "home-outline"}
                      />
                    }
                    color="white"
                    size="sm"
                  />
                  <Text color="white" fontSize="12">
                    Publicar
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
                MisServicios
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

export default Cuenta;
