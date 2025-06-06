import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GerNumAle from './GerNumAle'; // Caminho para o componente GerNumAle.


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Usando o componente Aleatório */}
      <Text style={styles.title}>Gerador de Números Aleatórios</Text>
      <GerNumAle />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    backgroundColor: '#00FF00',
    borderRadius: 6,
    padding: 10,
    textAlign: 'center',
  }

});


// O componente App é o ponto de entrada do aplicativo. Ele renderiza o componente GerNumAle com diferentes valores de min e max.
