import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Topo from "../../componentes/Topo";
import Produto from "./componentes/Produto";

export default function Catalogo({ topo, produtos }) {

  const renderProduto = ({ item }) => (
    <Produto produto={item} />
  );

  return (
    <FlatList

      ListHeaderComponent={() => {
        return <>
          <Topo {...topo} />
        </>
      }}

      data={produtos.lista}
      renderItem={renderProduto}
      keyExtractor={({ id }) => id}
    />
  );
}


