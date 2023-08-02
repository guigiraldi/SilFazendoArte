import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Alert } from "react-native";
import Texto from "../../../componentes/Texto";

export default function BaseLista({ botaoTexto }) {
  return <View style={estilos.base}>
    <TouchableOpacity style={estilos.botao} onPress={() => { Alert.alert("Seu pedido deu um total de R$ 101239,00!") }}>
      <Texto style={estilos.botaoTexto}>{botaoTexto}</Texto>
    </TouchableOpacity>
  </View>
}

const estilos = StyleSheet.create({
  botao: {
    marginBottom: 15,
    width: "93%",
    height: 60,
    backgroundColor: "#660066",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  botaoTexto: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  }
})
