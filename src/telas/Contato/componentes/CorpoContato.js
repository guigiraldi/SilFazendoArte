import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Texto from "../../../componentes/Texto";

const { width } = Dimensions.get('window');

export default function CorpoContato({ contato: { icon, descricao } }) {
  return (
    <View style={estilos.tudo}>
      <View style={estilos.contatos}>
        <View style={estilos.fundo}>
          <Ionicons name={icon} size={40} color="white" style={estilos.icone} />
          <Texto style={estilos.texto}>{descricao}</Texto>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contatos: {
    alignItems: "center",
  },
  fundo: {
    backgroundColor: "#660066",
    width: "90%",
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  texto: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: 10,
  },
  icone: {
    marginLeft: 15,
  }
});
