import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Box,
  ViewPropTypes,
  Pressable,

} from "react-native";
import {ScrollView, NativeBaseProvider } from "native-base"
import { Button } from "react-native";
import HomeScreen from "./HomeScreen";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { auth } from "../pantallas/firebase-config";
import { useNavigation } from "@react-navigation/native";
import firebase from '../pantallas/firebase-config';

const LoginScreen = ({ navigation }) => {
  const [data, setData] = useState({
    Nombre: "",
    Apellidos: "",
    Celular: "",
    email: "",
    password: "",
  });

  const handleChange = (Nombre, value) => {
    setData({
      ...data,
      [Nombre]: value,
    });
  };

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("HomeScreen");
      }
    });
    return unsuscribe;
  }, []);

  const SaveNewUser = async () => {
    try {
      await firebase
      .db
      .collection("Usuario")    
      .add({
          Nombre: data.Nombre,
          Apellidos: data.Apellidos,
          Celular: data.Celular,
          email: data.email.toLowerCase(),
          password: data.password,
        });
    } catch (error) {
      alert("Something went wrong, please try again later.");
    }
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredentials) => {
        SaveNewUser();
      })
      .catch((error) => alert(error.message));
  };


  return (
    <NativeBaseProvider>
      <ScrollView>
    <View style={style.co}>
      <Image
        style={{
          width: 300,
          height: 259,
          marginRight: hp("5%"),
          marginLeft: hp("5%"),
          marginTop: hp("10%"),
        }}
        source={require("./images/registrate.png")}
      />

      <Text style={style.txtTitulo}>Registrate!</Text>
      <View style={style.textInputContainer}>
        <TextInput
          placeholder="Correo"
          onChangeText={(txt) => handleChange("email", txt)}
        />
      </View>
      <View style={style.textInputContainer}>
        <TextInput
          placeholder="Contraseña"
          onChangeText={(txt) => handleChange("password", txt)}
          secureTextEntry={true}
        />
      </View>
      <View style={style.textInputContainer}>
        <TextInput placeholder="Nombre" onChangeText={(txt) => handleChange("Nombre", txt)}/>
      </View>
      <View style={style.textInputContainer}>
        <TextInput placeholder="Apellidos"  onChangeText={(txt) => handleChange("Apellidos", txt)}/>
      </View>
      <View style={style.textInputContainer}>
        <TextInput placeholder="Celular" onChangeText={(txt) => handleChange("Celular", txt)}/>
      </View>

      <View style={style.BtnContainer}>
        <Button onPress={handleSignUp} title="Registrate"></Button>
      </View>

      <View style={style.BtnContainer}>
        <Button
          onPress={() => navigation.navigate("LoginScreen")}
          title="Listo inicia sesion!"
        ></Button>
      </View>

      <View>
        <Text style={style.txtTerminos}>
          Terminos y condiciones. Podrán registrarse en Dash Clean App todas
          aquellas personas que en su país de residencia sea Mexico consideradas
          legalmente mayores de edad. Las personas menores de edad deberán
          hacerlo a través de una cuenta de usuario de sus padres, tutores o
          representantes legales, con su consentimiento para poder hacer uso de
          Dash clean, siendo estos adultos los plenos responsables de los actos
          del menor en la App.
        </Text>
      </View>
    </View>
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

export default LoginScreen;
