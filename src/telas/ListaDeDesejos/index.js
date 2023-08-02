import React from "react";
import { FlatList } from "react-native";
import Topo from "../../componentes/Topo";
import ProdutoLista from "./componentes/ProdutoLista";
import BaseLista from "./componentes/BaseLista";

export default function ListaDeDesejos({ topo, produtos, base }) {

  const renderProduto = ({ item }) => (
    <ProdutoLista produto={item} />
  );

  return (
    <>
      <FlatList
        ListHeaderComponent={() => {
          return <>
            <Topo {...topo} />
          </>
        }}

        data={produtos.lista}
        renderItem={renderProduto}
        keyExtractor={({ id }) => id}

        ListFooterComponent={() => {
          return <>
            <BaseLista {...base} />
          </>
        }}
      />
    </>
  );
}
