import React, {useEffect, useState} from "react"
import { Text,View, StyleSheet,Image,TextInput,Box, ViewPropTypes, Pressable } from "react-native"
import { Button, Linking } from 'react-native'
import HomeScreen from "./HomeScreen"
import  { widthPercentageToDP  as  wp ,  heightPercentageToDP  as  hp }  from  'react-native-responsive-screen' ;
import {auth} from '../pantallas/firebase-config';
import { useNavigation } from "@react-navigation/native";

const handleCallPress = async () => {
Linking.openURL("tel:+4492300708");
};
const handleEmailPress = async () => {
    Linking.openURL("mailto:Dashcleansupport@outlook.com");
    };
 const handleCWhatsAppPress = async () => {
        Linking.openURL("https://wa.me/?text=WhatsApp Predefinido");
        };

const Contacto= ({ navigation }) => (



    <View style={style.co}>

        <Image
            style={{ width: 300, height: 259, marginRight: hp('5%'), marginLeft: hp('5%'), marginTop: hp('10%') }}
            source={require("./images/ayuda.png")} />

        <Text style={style.txtTitulo}>¿Necesitas hablar con nosotros?</Text>
        <Text style={style.txtsubTitulo}>¿Tienes alguna pregunta o quieres informarnos sobre un problema relacionado con un producto o servicio de DashClean? Te ayudaremos.</Text>
        <Image
            style={{ width: 35, height: 35, alignItems: "center", marginLeft: hp('23%'), justifyContent: "center", marginTop: hp('1%') }}
            source={require("./images/waplogo.png")} />
        <Text style={style.txtsubTitulo}>WhatsApp 449 230 07 08</Text>

        <Image
            style={{ width: 35, height: 35, alignItems: "center", marginLeft: hp('23%'), justifyContent: "center", marginTop: hp('1%') }}
            source={require("./images/correo.png")} />
        <Text style={style.txtsubTitulo}>Correo: Dashcleansupport@outlook.com</Text>

        <View style={style.BtnContainer}>
        <Button  title="Llamar" onPress={handleCallPress} />
    
        <Button  title="Email" onPress={handleEmailPress} />
        
        <Button  title="WhatsApp" onPress={handleCWhatsAppPress} />
        
        </View>
        <Text style={style.txtTerminos}>Terminos y condiciones. Podrán registrarse en Dash Clean App todas aquellas personas que en su país 
                    de residencia sea Mexico consideradas legalmente mayores de edad. Las personas menores de edad deberán hacerlo a través de una cuenta de usuario de sus padres,
                    tutores o representantes legales, con su consentimiento para poder hacer uso de Dash clean, siendo estos adultos los plenos responsables de los actos del menor en la App.</Text>





    </View>


)



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
    txtsubTitulo: {
        fontSize : hp ( '2%' ),
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
        marginTop: hp ( '1%' ),
        borderRadius:10
    },
    BtnContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:15,
        marginRight:15,
        marginTop: hp ( '1%' ),
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

export default Contacto;