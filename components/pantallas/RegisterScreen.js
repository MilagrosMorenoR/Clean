import React, {useEffect, useState} from "react"
import { Text,View, StyleSheet,Image,TextInput,Box, ViewPropTypes, Pressable } from "react-native"
import { Button } from 'react-native'
import HomeScreen from "./HomeScreen"
import  { widthPercentageToDP  as  wp ,  heightPercentageToDP  as  hp }  from  'react-native-responsive-screen' ;
import {auth} from '../pantallas/firebase-config';
import { useNavigation } from "@react-navigation/native";


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("HomeScreen")
            }
        })
        return unsuscribe
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }


        return(
            
           
            <View style={style.co}>
               
               <Image
          style={{ width: 300,height: 259, marginRight: hp ( '5%' ), marginLeft: hp ( '5%' ),marginTop: hp ( '10%' ) }}
          source={require("./images/registrate.png")}
            />
                
                <Text style={style.txtTitulo}>Registrate!</Text>
                <View style={style.textInputContainer}>
                    <TextInput
                        placeholder="Correo"
                        value={email}
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
                <View style={style.textInputContainer}>
                    <TextInput
                        placeholder="Nombre"
                      
                    />
                </View>
                <View style={style.textInputContainer}>
                    <TextInput
                        placeholder="Celular"
                       
                       
                    />
                </View>
                

                <View style={style.BtnContainer}>
                <Button
                    onPress={handleSignUp}
                    
                    title="Registrate" 
                >
                </Button>
                </View>

                <View style={style.BtnContainer}>
                <Button
                    
                    onPress={() => navigation.navigate("LoginScreen")}
                    title="Listo inicia sesion!" 
                >
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
        fontSize : hp ( '3%' ),
        textAlign:"center",
        color:"#000000",
        marginTop: hp ( '1%' )
    },
    txtTerminos: {
        fontSize : hp ( '1%' ),
        textAlign:"center",
        color:"#000000",
        marginTop: hp ( '1%' )
    },
    textInputContainer:{
       
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF",
        marginLeft:15,
        marginRight:15,
        marginTop: hp ( '2%' ),
        borderRadius:10
    },
    BtnContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:15,
        marginRight:15,
        marginTop: hp ( '2%' ),
        borderRadius:10
    },
    textISeparation:{
        
        marginTop: hp ( '2%' ),
        
    },

    btnSesion:{
       marginTop: hp ( '2%' ),
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