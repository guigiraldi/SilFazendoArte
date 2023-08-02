import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import Texto from './Texto';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {

  return <>
    <View style={estilos.header}>
      <Image source={require('../../assets/logoSil.png')} style={estilos.logo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </View>
  </>
}

const estilos = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: "#660066",
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: 5,
  },
  logo: {
    position: "absolute",
    top: 2,
    right: 2,
    width: 77,
    height: 60,
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
})