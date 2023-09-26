import React, { useState } from "react";
import { FlatList, View, StyleSheet, ScrollView, TextInput } from "react-native";
import Topo from "../../componentes/Topo";
import Produto from "./componentes/Produto";
import { Video, ResizeMode } from 'expo-av';

export default function Catalogo({ topo, produtos }) {
  const [barraPesquisa, setBarraPesquisa] = useState("");

  const renderProduto = ({ item }) => (
    <Produto produto={item} />
  );

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const filtrarProdutos = (termo) => {
    return produtos.lista.filter((produto) =>
      produto.titulo.toLowerCase().includes(termo.toLowerCase())
    );
  };

  const produtosFiltrados = filtrarProdutos(barraPesquisa);

  return (
    <ScrollView style={estilos.container}>
      <Topo {...topo} />
      <TextInput
        style={estilos.textInput}
        placeholder="Pesquisar"
        placeholderTextColor="white"
        value={barraPesquisa}
        onChangeText={(text) => setBarraPesquisa(text)}

        onSubmitEditing={() => {
          const produtosFiltrados = filtrarProdutos(barraPesquisa);
        }}
      />
      <Video
        ref={video}
        style={estilos.video}
        source={require('../../../assets/video.mp4')}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(status)}
      />
      <FlatList
        contentContainerStyle={estilos.lista}
        data={produtosFiltrados}
        renderItem={renderProduto}
        keyExtractor={({ id }) => id}
      />
    </ScrollView>
  );
}
const estilos = StyleSheet.create({
  video: {
    width: "90%",
    height: 170,
    alignSelf: "center",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
  },

  textInput: {
    alignSelf: "center",
    width: "90%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "#660066",
    color: "white",
    textAlign: "center",
  }
});


