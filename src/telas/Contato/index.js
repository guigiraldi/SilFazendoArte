import React from "react";
import { Dimensions, StyleSheet, FlatList, Image } from "react-native";
import Topo from "../../componentes/Topo";
import CorpoContato from "./componentes/CorpoContato";
import imagemsobre from "../../../assets/Sobre.png"

const { width } = Dimensions.get('window');

export default function Contato({ topo, contatos }) {

  const renderContato = ({ item }) => (
    <CorpoContato contato={item} />
  );

  return (
    <FlatList

      ListHeaderComponent={() => {
        return <>
          <Topo {...topo} />
          <Image source={imagemsobre} style={estilos.imagemsobre} />
        </>
      }}

      data={contatos.lista}
      renderItem={renderContato}
      keyExtractor={({ icon }) => icon}
    />
  );
}

const estilos = StyleSheet.create({
  imagemsobre: {
    marginTop: 20,
    marginBottom: 25,
    width: width * 1.0,
    height: width * 0.35,
  },
});
