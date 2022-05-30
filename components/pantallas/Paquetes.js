import React, { useEffect, useState } from "react";
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
import firebase from "../pantallas/firebase-config";

const Paquetes = ({ navigation, route }) => {
  const {Calle, Dia, Colonia, Cp, NumeroExt, NumeroInt} = route.params;

  const [paquetes, setPaquetes] = useState([]);
  useEffect(() => {
    firebase.db.collection("Paquete")
    .onSnapshot((querySnapshot) => {
      const paquetes = [];
      querySnapshot.docs.forEach((doc) => {
        const { Descripcion, Monto, Nombre, Imagen } = doc.data();
        const Id = doc.id;
        paquetes.push({
          id: Id,
          Descripcion: Descripcion,
          Monto: Monto,
          Imagen: Imagen,
          Nombre: Nombre,
        });
      });
      setPaquetes(paquetes);
    });
  }, []);

  return (
    <NativeBaseProvider>
      <ScrollView>
        {paquetes.map((paquetes) => {
          return (
            <Center backgroundColor={"#FFFFFF"}>
              <Box alignItems="center" marginTop={20}>
                <Box
                  maxW="80"
                  rounded="lg"
                  overflow="hidden"
                  borderColor="coolGray.200"
                  borderWidth="1"
                  _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                  }}
                  _web={{
                    shadow: 2,
                    borderWidth: 0,
                  }}
                  _light={{
                    backgroundColor: "gray.50",
                  }}
                  pt={5}
                >
                  <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                      <Image
                        source={{
                          uri: paquetes.Imagen,
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Box>

                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        {paquetes.Nombre}
                      </Heading>
                      <Heading size="md" ml="-1">
                        8:00 am
                      </Heading>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: "violet.500",
                        }}
                        _dark={{
                          color: "violet.400",
                        }}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                      >
                        Detalles:
                      </Text>
                    </Stack>
                    <Text fontWeight="400">{paquetes.Descripcion}</Text>
                    <HStack
                      alignItems="center"
                      space={4}
                      justifyContent="space-between"
                    >
                      <HStack alignItems="center">
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                          fontWeight="400"
                        >
                          {paquetes.Monto} $
                        </Text>
                      </HStack>

                      <Button
                        onPress={() => navigation.navigate("MisServicios")}
                      >
                        Seleccionar
                      </Button>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            
            </Center>
          );
        })}
        

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
                  Buscar
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
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Paquetes;
