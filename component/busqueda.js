import React, { Component, useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const busqueda = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("se ha elejido una fecha: ", date);
      hideDatePicker();
    };
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={'Codigo Postal'}
          style={styles.input}
        />
        <Button title="Fecha" onPress={showDatePicker} />
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
        
        <Button
        title="Buscar"
        color="#f194ff"
        onPress={() => Alert.alert('busqueda realizada')}
      />
      </View>
    );
}

export default Example;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});