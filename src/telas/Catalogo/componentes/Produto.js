import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";
import { Audio } from 'expo-av'

export default function Produto({ produto: { titulo, descricao, precin, imagem, id }, onAdiciona }) { 

  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(new Audio.Sound());

  useEffect(() => {
    (
      async () => {
      console.log('status', audioStatus)
      if (audioStatus) {
        await sound.loadAsync(require('../../../../assets/audio.mp4'))
        try { await sound.playAsync() } catch (e) { console.log(e) }
      }
      else {
        await sound.stopAsync()
        await sound.unloadAsync()
      }
    })()
  }, [audioStatus])

  const adicionarLista = () => {
    onAdiciona({ titulo, descricao, precin, imagem, id });
    setAudioStatus(!audioStatus);
  };

  return <View key={id} style={estilos.produto}>
    <Image source={imagem} style={estilos.imagem} />
    <View style={estilos.conteudo}>

      <View style={estilos.textos}>
        <Texto style={estilos.tituloprod}>{titulo}</Texto>
        <Texto style={estilos.descricao}>{descricao}</Texto>
      </View>

      <View style={estilos.base}>
        <Texto style={estilos.preco}>{precin}</Texto>
        <Button style={estilos.botao} title="Adicionar" onPress={() => setAudioStatus(!audioStatus)} />
      </View>

    </View>
  </View>
}

const estilos = StyleSheet.create({
  produto: {
    marginBottom: 15,
    width: 330,
    height: 150,
    backgroundColor: "#F2F3F4",
    borderRadius: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#C7C7C7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    flexDirection: "row",
  },
  conteudo: {
    width: 215,
    alignItems: "center",
  },
  imagem: {
    marginTop: 15,
    marginLeft: 15,
    width: 100,
    height: 120,
    borderRadius: 5,
  },
  textos: {
    marginTop: 15,
    alignItems: "center",
  },
  tituloprod: {
    fontWeight: "bold",
    fontSize: 18,
  },
  descricao: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
    width: 150,
  },
  base: {
    position: "absolute",
    bottom: 13,
    flexDirection: "row",
  },
  preco: {
    marginTop: 5,
    marginRight: 25,
    fontWeight: "bold",
    fontSize: 15,
  },
  botao: {
    width: 90,
    height: 30,
    backgroundColor: "#660066",
    borderRadius: 5,
    justifyContent: "center",
  },
  botaoTexto: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  }
});
