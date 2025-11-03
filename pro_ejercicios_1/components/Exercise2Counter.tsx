import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';


type Props = {
  initialCount?: number;
  resetOnTouch?: boolean;
};

export default function Exercise2Counter({ initialCount = 0, resetOnTouch = true }: Props) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {}, [count]);

  const handleIncrement = () => {setCount(prevCount => prevCount + 1);};
  const handleReset = () => {setCount(initialCount);};

  return (
    <TouchableOpacity
      style={styles.touchableWrapper}
      onPress={resetOnTouch ? handleReset : undefined}
      activeOpacity={resetOnTouch ? 0.05 : 1}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Ejercicio 2: Contador</Text>
        <Text style={styles.counterText}>Contador: {count}</Text>

        <Button title="Incrementar" onPress={handleIncrement} />

        {count > 0 && count % 5 === 0 && (
          <Text style={styles.multipleMessage}>¡Ha alcanzado un múltiplo de 5!</Text>
        )}

        {resetOnTouch && (
          <Text style={styles.hintText}>(Toca este recuadro para reiniciar el contador)</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableWrapper: {
    padding: 0,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    padding: 20,
    backgroundColor: '#e6f7ff',
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  counterText: {
    fontSize: 28,
    marginVertical: 15,
    fontWeight: '600',
    color: '#007bff',
  },
  multipleMessage: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  hintText: {
    fontSize: 12,
    color: '#888',
    marginTop: 15,
    textAlign: 'center',
  },
});