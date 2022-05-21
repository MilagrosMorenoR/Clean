import React, {Component, useState} from "react"
import { Text,View, StyleSheet,Image,TextInput, ViewPropTypes, Pressable } from "react-native"
import { Button } from 'react-native'
import HomeScreen from "./HomeScreen"

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    
    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Account created!')
          const user = userCredential.user;
          console.log(user)
        })
        .catch(error => {
          console.log(error)
          Alert.alert(error.message)
        })
      }
      
      const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Signed in!')
          const user = userCredential.user;
          console.log(user)
          navigation.navigate('HomeScreen');
        })
        .catch(error => {
          console.log(error)
        })
      }
    
        return(
            
            <View style={style.co}>
               
               <Image
          style={{ width: 300, height: 259, marginLeft:50,marginTop:20,marginBottom: 2 }}
          source={require("./dashcleanlogo.png")}
            />
                
                <Text style={style.txtTitulo}>Inicia sesión o registrate!</Text>
                <View style={style.textInputContainer}>
                    <TextInput
                        placeholder="Usuario"
                       onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={style.textInputContainer}>
                    <TextInput
                        placeholder="Contraseña"
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </View>
                
                <View style={style.BtnContainer}>
                <Button 
                /*onPress= {()=> {
                    navigation.navigate('HomeScreen')
                }}*/
                onPress={handleSignIn}
               
                title="Iniciar sesion" >
                
                </Button  >
                </View>

                <View style={style.BtnContainer}>
                <Button
                onPress={handleCreateAccount}
                title="Registrate" >
                
                </Button>
                </View>
                <View>
                <Text style={style.txtTerminos}>Terminos y condiciones. Podrán registrarse en Dash Clean App todas aquellas personas que en su país 
                    de residencia sea Mexico consideradas legalmente mayores de edad. Las personas menores de edad deberán hacerlo a través de una cuenta de usuario de sus padres,
                    tutores o representantes legales, con su consentimiento para poder hacer uso de Dash clean, siendo estos adultos los plenos responsables de los actos del menor en la App.</Text>
            </View>
                
            </View>
        )
    }



const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#FFFFFF"

    },
    txtTitulo: {
        fontSize:30,
        textAlign:"center",
        color:"#000000",
        marginTop:40
    },
    txtTerminos: {
        fontSize:10,
        textAlign:"center",
        color:"#000000",
        marginTop:20
    },
    textInputContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF",
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        marginBottom:20,
        borderRadius:10
    },
    BtnContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        marginBottom:5,
        borderRadius:10
    },
    textISeparation:{
        
        marginTop:20,
        
    },
    btnSesion:{
        marginTop:40,
        marginBottom:40,
        marginLeft:30,
        marginRight:30,
        backgroundColor:"#1AB6FF",
        height:50,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    },
    txtSesion:{
        color:"#FFF",
        fontSize:17,
        fontWeight:"bold"
    }


});

export default LoginScreen;