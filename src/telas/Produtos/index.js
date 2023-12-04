import React from 'react';
import { FlatList } from 'react-native';
import ProdutoItem from './ProdutoItem';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilos from './estilos';
import Texto from '../../componentes/Texto';

const produtos = [
    {
        id: 1,
        nome: "CESTA FRIO",
        preco: 79.9,
        descricao: "Cesta de frutas de Inverno!"
    }, {
        id: 2,
        nome: "CESTA CALOR",
        preco: 89.9,
        descricao: "Cesta de frutas de Verão!"
    }, {
        id: 3,
        nome: "CESTA ESTAÇÕES",
        preco: 99.9,
        descricao: "Uma cesta com frutas da estação vigente."
    }]

export default function Produtos() {
    return <TelaPadrao>
        <Texto style={estilos.texto_produtos}>
            Veja abaixo a nossa lista de produtos.
        </Texto>

        <Texto style={estilos.texto_produtos}>
            Clique no produto para visualizar mais detalhes.
        </Texto>

        <FlatList
            data={produtos}
            renderItem={({ item }) => <ProdutoItem {...item} />}
            keyExtractor={({ id }) => String(id)} />
    </TelaPadrao>
}