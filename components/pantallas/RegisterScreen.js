import React, {Component} from "react"
import { Text,View, StyleSheet,Image,TextInput, ViewPropTypes, Pressable } from "react-native"
import { Button } from 'react-native'

const RegisterScreen = ({ navigation }) => {

   
    return(
            
        <View style={style.co}>
           

           <Image
          style={{ width: 200, height: 200, marginLeft:100,marginRight:100,marginTop:30,marginBottom: 2 }}
          source={require("./registrate.png")}
            />
            <Text style={style.txtTitulo}>Registrate ahora!</Text>
            <View style={style.textInputContainer}>
                <TextInput
                    placeholder="Nombre"

                />
            </View>
            <View style={style.textInputContainer}>
                <TextInput
                    placeholder="Direccion"

                />
            </View>
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

            <View style={style.textISeparation}>

            </View>
            
           
            <Button 
            onPress= {()=> {
                navigation.navigate('RegisterScreen')
            }}

            title="Registrate" >
            
            </Button>
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
    marginTop:10
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
    marginTop:20,
    marginBottom:20,
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

export default RegisterScreen;