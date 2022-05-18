import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, Button, TextInput  } from 'react-native';
import { reduceEachLeadingCommentRange } from 'typescript';


export default function App() {
  const [text, onChangeEstado] = React.useState("Codigo postal");
 

  return (
    <View style={styles.container}>
      <TextInput onChange={onChangeEstado} style={styles.input} value={text} />
      
      
      <Button
        title="Buscar"
        onPress={() => console.log("holaaa")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 60,
    borderWidth: 3,
    borderRadius: 12,
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 12,
  },
  Button:{
    borderRadius: 12,
    width: 12,
  },
});
