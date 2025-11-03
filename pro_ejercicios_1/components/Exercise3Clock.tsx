import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


type Props = {
  initialShowSeconds?: boolean;
  initialFormat24Hour?: boolean;
};

export default function Exercise3Clock({  initialShowSeconds = true, initialFormat24Hour = true,}: Props) {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [format24Hour, setFormat24Hour] = useState(initialFormat24Hour);
  const showSeconds = initialShowSeconds; 

  const formatTime = (date: Date): string => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    let ampm = '';

    if (!format24Hour) {
      ampm = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12;
      hours = hours ? hours : 12; 
    }

    const formattedHours = hours.toString().padStart(2, '0');

    return `${formattedHours}:${minutes}${showSeconds ? `:${seconds}` : ''}${ampm}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [format24Hour]);

  const toggleFormat = () => {
    setFormat24Hour(prevFormat => !prevFormat);
  };

  return (
    <TouchableOpacity
      style={styles.touchableWrapper}
      onPress={toggleFormat}
      activeOpacity={0.05}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Ejercicio 3: Reloj en Tiempo Real</Text>
        <Text style={styles.clockText}>{formatTime(currentTime)}</Text>
        <Text style={styles.hintText}>
          (Toca este recuadro para cambiar a formato {format24Hour ? 'AM/PM' : '24 Horas'})
        </Text>
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
    backgroundColor: '#fff0e6',
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  clockText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  hintText: {
    fontSize: 12,
    color: '#888',
    marginTop: 15,
    textAlign: 'center',
  },
});