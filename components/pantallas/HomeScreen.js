import React, { Component, useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
  const [data, setData] = useState({
    Calle: "",
    Dia: "",
    NumeroExt: "",
    NumeroInt: "",
    Colonia: "",
    Cp: "",
  });

  const handleChange = () => {
    setData({
      ...data,
    });
    console.log(data.Calle);
  };

  const PasandoDatos = () => {
    navigation.navigate("Paquetes", {
      Calle: data.Calle,
      Dia: data.Dia,
      NumeroExt: data.NumeroExt,
      NumeroInt: data.NumeroInt,
      Colonia: data.Colonia,
      Cp: data.Cp,
    });
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
      <Image
        style={{
          width: 250,
          height: 259,
          marginRight: hp("5%"),
          marginLeft: hp("5%"),
          marginTop: hp("10%"),
        }}
        source={require("./images/registrate.png")}
      />
        <View style={style.textInputContainer}>
          <TextInput
            placeholder="Dia"
            onChangeText={(txt) => handleChange("Dia", txt)}
          />
        </View>
        <View style={style.textInputContainer}>
          <TextInput
            placeholder="Calle"
            onChangeText={(txt) => handleChange("Calle", txt)}
          />
        </View>
        <View style={style.textInputContainer}>
          <TextInput
            placeholder="Numero Exterior"
            onChangeText={(txt) => handleChange("NumeroExt", txt)}
          />
        </View>
        <View style={style.textInputContainer}>
          <TextInput
            placeholder="Numero Interior"
            onChangeText={(txt) => handleChange("NumeroInt", txt)}
          />
        </View>
        <View style={style.textInputContainer}>
          <TextInput
            placeholder="Colonia"
            onChangeText={(txt) => handleChange("Colonia", txt)}
          />
        </View>
        <View style={style.textInputContainer}>
          <TextInput
            placeholder="Cp"
            onChangeText={(txt) => handleChange("Cp", txt)}
          />
        </View>

        <View style={style.BtnContainer}>
          <Button onPress={PasandoDatos} title="Siguiente">Siguiente</Button>
        </View>

        <Center bg="#03cffc">
          <Box
            flex={1}
            bg="white"
            safeAreaTop
            width="100%"
            maxW="900px"
            alignSelf="center"
          >
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
                opacity={selected === 2 ? 1 : 0.6}
                py="3"
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
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  txtTitulo: {
    fontSize: hp("3%"),
    textAlign: "center",
    color: "#000000",
    marginTop: hp("1%"),
  },
  txtTerminos: {
    fontSize: hp("1%"),
    textAlign: "center",
    color: "#000000",
    marginTop: hp("1%"),
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginLeft: 15,
    marginRight: 15,
    marginTop: hp("2%"),
    borderRadius: 10,
  },
  BtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    marginTop: hp("2%"),
    borderRadius: 10,
  },
  textISeparation: {
    marginTop: hp("2%"),
  },

  btnSesion: {
    marginTop: hp("2%"),
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#1AB6FF",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  txtSesion: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
export default HomeScreen;
