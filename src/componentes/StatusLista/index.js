// StatusLista.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatusLista({ total }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Preço Total da Lista: <Text style={estilos.valorTotal}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</Text></Text>
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
  valorTotal: {
    fontSize: 18, // ou qualquer tamanho desejado
    color: 'purple',
  },
});
