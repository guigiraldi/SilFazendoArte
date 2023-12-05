// StatusLista.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatusLista({ total }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Total da Lista de Desejos: {total}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginBottom: 10,
  },
  texto: {
    fontWeight: 'bold',
  },
});
