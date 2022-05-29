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
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center backgroundColor={"#FFFFFF"}>
          <Image
            style={{
              width: 300,
              height: 259,
              marginLeft: 50,
              marginTop: 30,
              marginBottom: 2,
            }}
            source={require("./images/dashcleanlogo.png") }alt="image2"
          />
        </Center>
        <Center backgroundColor={"#FFFFFF"} pt={5}>
          <VStack width="90%" mx="3" maxW="300px">
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Dia que requiere la limpieza
              </FormControl.Label>
              <Input placeholder="DD/MM/AAAA" keyboardType="numeric"/>
              <FormControl.HelperText
                _text={{
                  fontSize: "xs",
                }}
              >
                Por favor ponga el formato indicado
              </FormControl.HelperText>
            </FormControl>
          </VStack>

          <VStack width="90%" mx="3" maxW="300px" pt={5}>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Indicaciones del servicio
              </FormControl.Label>
              <Input placeholder="Ej: Limpiar baño, cocina y cochera" />
            </FormControl>
          </VStack>

          <VStack width="90%" mx="3" maxW="300px" pt={5}>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Hora que requiere la limpieza
              </FormControl.Label>
              <Input placeholder="Ej: 18:00" />
              <FormControl.HelperText
                _text={{
                  fontSize: "xs",
                }}
              >
                Por favor ponga el formato de 24 horas
              </FormControl.HelperText>
            </FormControl>
          </VStack>

          <VStack width="90%" mx="3" maxW="300px" pt={5}>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Calle
              </FormControl.Label>
              <Input placeholder="Ej: Diagonal Alfil" />
            </FormControl>
          </VStack>

          <VStack width="90%" mx="3" maxW="300px" pt={5}>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Numero(ext)
              </FormControl.Label>
              <Input placeholder="Ej: 146" keyboardType="numeric"/>
            </FormControl>
          </VStack>

          <VStack width="90%" mx="3" maxW="300px" pt={5}>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Numero(int)
              </FormControl.Label>
              <Input placeholder="Ej: 1" keyboardType="numeric"/>
            </FormControl>
          </VStack>

          <VStack width="90%" mx="3" maxW="300px" pt={5}>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Colonia
              </FormControl.Label>
              <Input placeholder="Ej: Lomas del Ajedrez" />
            </FormControl>
          </VStack>

          <VStack width="90%" mx="3" maxW="300px" pt={5}>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Codigo Postal
              </FormControl.Label>
              <Input placeholder="Ej: 20299" keyboardType="numeric"/>
            </FormControl>
          </VStack>

          <VStack width="90%" mx="3" maxW="300px" pt={5} pb={5}>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Cuanto va pagar por el servicio
              </FormControl.Label>
              <Input placeholder="Ej: $500" keyboardType="numeric"/>
            </FormControl>
          </VStack>

          <Button onPress={() => navigation.navigate("ServicioPublicado")} >
              Siguiente
            </Button>
        </Center>

        <Center bg="#03cffc">
          <Box
            flex={1}
            bg="white"
            safeAreaTop
            width="100%"
            home-outline
            alignSelf="center"
          >
            <Center flex={1}></Center>
            <HStack
              bg="#03cffc"
              alignItems="center"
              safeAreaBottom
              shadow={6}
            >
              <Pressable
                opacity={selected === 0 ? 1 : 0.5}
                py="4"
                flex={1}
                onPress={() => navigation.navigate("HomeScreen")}
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
                    Mis servicios
                  </Text>
                </Center>
              </Pressable>

              <Pressable
                opacity={selected === 2 ? 1 : 0.6}
                py="3"
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
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default HomeScreen;
