import React, { useState } from 'react';
import { View, Text } from 'react-native';
import estilos from './estilos';
import Botao from '../../componentes/Botao';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProdutoItem({ id, nome, descricao, preco, quantidade: quantidadeInicial }) {
    //Variáveis de estado (hooks)​
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);
    return <>
        <View style={estilos.informacao}>


            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)} </Text>
        </View>
        <View style={estilos.carrinho}>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Quantidade: {quantidade} </Text>
            </View>
            <Botao texto='Remover da Lista de Desejos' style={estilos.botao} />
        </View>
        <View style={estilos.divisor} />
    </>
}