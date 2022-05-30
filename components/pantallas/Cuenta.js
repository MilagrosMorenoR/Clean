import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
import firebase from "../pantallas/firebase-config";
import { auth } from "../pantallas/firebase-config";

const Cuenta = ({ navigation }) => {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    firebase.db
      .collection("Usuario")
      .where("email", "==", auth.currentUser?.email)
      .get()
      .then(function (querySnapshot) {
        const usuario = [];
        console.log("alv");
        querySnapshot.forEach(function (doc) {
          const { Apellidos, Celular, Nombre, email, password } = doc.data();
          usuario.push({
            Nombre: Nombre,
            Apellidos: Apellidos,
            Celular: Celular,
            email: email,
            password: password,
          });
          console.log("Sis")
        });//malo
        setUsuario(usuario);
      });
  }, []);

  const handleSingOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <NativeBaseProvider>
      
      <Center bg="#03b5fc">
      {usuario.map((usuario) => {
          return (
        <Center
          bg="#03b5fc"
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
          <Text style={{ color: "#FFFFFF" }}>{usuario.Nombre} {usuario.Apellidos}</Text>
          <Text style={{ color: "#FFFFFF" }}>{usuario.Celular}</Text>
        </Center>
          );
      })}
      </Center>

      <Center backgroundColor={"#FFFFFF"}>
        {usuario.map((usuario) => {
          return (
            <ScrollView style={style.textstyle}>
              <Image
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  marginLeft: hp("7%"),
                  justifyContent: "center",
                  marginTop: hp("1%"),
                }}
                source={require("./images/editicon.png")}
              />
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
                        {usuario.Apellidos}
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

              <Image
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  marginLeft: hp("7%"),
                  justifyContent: "center",
                  marginTop: hp("1%"),
                }}
                source={require("./images/credit.png")}
              />

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

              <Image
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  marginLeft: hp("7%"),
                  justifyContent: "center",
                  marginTop: hp("1%"),
                }}
                source={require("./images/cerrarsesion.png")}
              />

              <Button size="lg" variant="link" onPress={handleSingOut}>
                Cerrar Sesión
              </Button>

              <Image
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  marginLeft: hp("7%"),
                  justifyContent: "center",
                  marginTop: hp("1%"),
                }}
                source={require("./images/contact.png")}
              />

              <Button
                size="lg"
                variant="link"
                onPress={() => navigation.navigate("Contacto")}
              >
                Contacto y ayuda
              </Button>
            </ScrollView>
          );
        })}
      </Center>

      <Box flex={1} bg="white">
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
    </NativeBaseProvider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  textstyle: {
    textAlign: "center",

    marginTop: hp("1%"),
  },
});

export default Cuenta;
