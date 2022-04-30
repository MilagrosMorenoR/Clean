import React, {Component} from "react"
import { Text,View, StyleSheet,Image,TextInput, ViewPropTypes, Pressable } from "react-native"


class LoginScreen extends Component {
    render(){
        return(
            <View style={style.co}>
               
    
                
                <Text style={style.txtTitulo}>Inicia sesión o registrate!</Text>
                <View style={style.textInputContainer}>
                    <TextInput
                        placeholder="Usuario"

                    />
                </View>
                <View style={style.textInputContainer}>
                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry={true}
                    />
                </View>
                <Pressable onPress={()=>console.log("Presionando boton")}>
                <View style={style.btnSesion}>
                    <Text style={style.txtSesion}>Iniciar sesion</Text>
                </View>
                </Pressable>

                <Pressable onPress={()=>console.log("Presionando boton")}>
                <View style={style.btnSesion}>
                    <Text style={style.txtSesion}>Registrate</Text>
                </View>
                </Pressable>
                
            </View>
        )
    }
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
        marginTop:90
    },
    textInputContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF",
        marginLeft:15,
        marginRight:15,
        marginTop:20,
        borderRadius:10
    },
    btnSesion:{
        marginTop:40,
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