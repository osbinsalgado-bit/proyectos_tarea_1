import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'; 

type Props = {
  loadDuration?: number;
}

export default function Exercise4LoadingScreen({ loadDuration = 3000 }: Props) {
  const [isLoading, setIsLoading] = useState(true);



  const restartLoading = () => {
    setIsLoading(true); 
  };

  useEffect(() => {

    if (!isLoading) return;

    const timerId = setTimeout(() => {
      setIsLoading(false);

    }, loadDuration);

    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={restartLoading}
      activeOpacity={0.7}>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Ejercicio 4: Pantalla de Carga</Text>

        {isLoading ? (
          <View style={styles.loadingContent}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.loadingText}>Cargando...</Text>
          </View>
        ) : (
          <>
            <Text style={styles.welcomeText}>¡Bienvenido a la aplicación!</Text>
            <Text style={styles.tapToRestartText}>(Toca para reiniciar la carga)</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableContainer: {
    padding: 0,
    borderRadius: 8,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#e6ffe6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  loadingContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
    color: '#555',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
    textAlign: 'center',
  },
  tapToRestartText: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
    textAlign: 'center',
  }
});