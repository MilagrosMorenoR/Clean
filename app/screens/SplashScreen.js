import React, {Component} from "react"
import { View, StatusBar } from "react-native"
import * as Animatable from 'react-native-animatable'
import { ImageBackgroundStyle } from "@styles/General"

export default class LoginScreen extends Component {

    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }

    componentDidMount(){
        setTimeout( () => {
            this.goToScreen('Login')
        }, 5000, this)
    }

    render(){
        return(
           <View style={ImageBackgroundStyle.image}>
               <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)'/>
               <Animatable.Image>

                   animation="pulse"
                   easing="ease-out"
                   iterationCount="infinite"
                   atyle={{
                       width:200,
                       height:200,
                       margin:100,
                   }}
                   source={require('@recursos/images/dashcleanlogo.png')}


               </Animatable.Image>
           </View>
         )
    }
}
