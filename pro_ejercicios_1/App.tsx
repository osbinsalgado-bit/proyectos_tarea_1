import React from 'react';
import { StyleSheet, View, ScrollView, Text, SafeAreaView, Dimensions, Platform } from 'react-native';
import Exercise1UserForm from './components/Exercise1UserForm';
import Exercise2Counter from './components/Exercise2Counter';
import Exercise3Clock from './components/Exercise3Clock';
import Exercise4LoadingScreen from './components/Exercise4LoadingScreen';

const HEADER_HEIGHT = 100;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ejercicios de React Native</Text>
        <Text style={styles.headerText}>Osbin Salgado - 62411393</Text>
      </View>

      <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingTop: 20 }]}
      >
        <Exercise1UserForm />
        <Exercise2Counter />
        <Exercise3Clock />
        <Exercise4LoadingScreen />
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    elevation: 10,
    backgroundColor: 'rgba(248,248,248,0.85)',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingTop: HEADER_HEIGHT + 80,
    alignItems: 'center',
    top: '11%',
  },
});
