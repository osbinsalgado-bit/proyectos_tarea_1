import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function Exercise1UserForm() {

  const [user, setUser] = useState({ name: '', age: '' });

  const handleNameChange = (text: string) => {
    setUser({ ...user, name: text });
  };

  const handleAgeChange = (text: string) => {

    if (text === '' || /^\d+$/.test(text)) {
      setUser({ ...user, age: text });
    } else {

      Alert.alert("Entrada inválida", "La edad debe ser un número.");
    }
  };

  const handleSubmit = () => {

    if (user.name.trim() === '' || user.age.trim() === '') {
      Alert.alert("Formulario incompleto", "Por favor, introduce tu nombre y edad.");
      return;
    }
    Alert.alert("Datos enviados", `Nombre: ${user.name}, Edad: ${user.age}`);
    console.log("Datos del usuario:", user);
  };

  const resetForm = () => {
    setUser({ name: '', age: '' });
    console.log('Formulario reiniciado.');
  };


  return (
      <View style={styles.container}>
        <Text style={styles.title}>Ejercicio 1: Formulario de Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={user.name}
          onChangeText={handleNameChange}
          keyboardType="default"  
          autoCapitalize="words"  
          autoCorrect={true}  
          textContentType="name" 
        />

        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={user.age}
          onChangeText={handleAgeChange}
          keyboardType="numeric"   
          maxLength={3} 
        />

        {user.name.trim() !== '' && user.age.trim() !== '' ? (
          <Text style={styles.message}>
            Hola, {user.name}. Tienes {user.age} años.
          </Text>
        ) : (
          <Text style={styles.message}>Introduce tu nombre y edad.</Text>
        )}

 
        <Button title="Enviar Datos" onPress={handleSubmit} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    width: '95%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    fontSize: 16,
    color: '#333',
  },
  message: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
    color: '#555',
    maxWidth: '90%',
  },
});