import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import Texto from './Texto';
import Perfil from './Perfil'; // Importe o componente Perfil
import { useNavigation } from '@react-navigation/native';

export default function Topo({ titulo }) {
  const navigation = useNavigation();
  const [perfilVisible, setPerfilVisible] = useState(false);

  const abrirTelaCirculo = () => {
    setPerfilVisible(true);
  };

  const fecharTelaCirculo = () => {
    setPerfilVisible(false);
  };

  return (
    <>
      <View style={estilos.header}>
        <TouchableOpacity onPress={abrirTelaCirculo}>
          <Image source={require('../../assets/seta.png')} style={estilos.seta} />
        </TouchableOpacity>
        <Image source={require('../../assets/logoSil.png')} style={estilos.logo} />
        <Texto style={estilos.titulo}>{titulo}</Texto>
      </View>
      <Perfil isVisible={perfilVisible} onClose={fecharTelaCirculo} />
    </>
  );
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
    flexDirection: 'row',
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
  seta: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
