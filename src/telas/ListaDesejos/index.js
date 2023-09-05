import React from "react";
import { FlatList } from "react-native";

import Item from "./Item";
import TelaPadrao from "../../componentes/TelaPadrao";

const produtos = [
    {
        id: 1,
        nome: "CESTA INVERNO",
        descricao: "Cesta de frutas de inverno.",
        preco: 79.9,
        quantidade: 1,
    },
    {
        id: 2,
        nome: "CESTA VERÃO",
        descricao: "Cesta de frutas de verão",
        preco: 89.9,
        quantidade: 2,
    }
];

export default function ListaDesejos (){
    return <TelaPadrao> 
        <FlatList
                data={produtos}
                renderItem={({item})=>(<Item {...item}/>)}
                keyExtractor={({id})=>(String(id))}
            />
    </TelaPadrao>
}