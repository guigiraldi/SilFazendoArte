import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";

const produtos = [
    {
        id: 1,
        nome: "CESTA INVERNO",
        descricao: "Cesta de frutas de inverno",
        preco: 79.90
    },
    {
        id: 2,
        nome: "CESTA VERÃO",
        descricao: "Cesta de frutas de verão",
        preco: 89.90
    },
    {
        id: 3,
        nome: "CESTA ESTAÇÕES",
        descricao: "Cesta de frutas da estação vigente",
        preco: 99.90
    },
];

export default function Produtos() {

    return <FlatList
        data={produtos}
        renderItem={({ item }) => (<Item {...item} />)}
        keyExtractor={({ id }) => (String(id))}
    />;
}