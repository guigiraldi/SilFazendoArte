import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import estilos from './estilos';
import Botao from '../../componentes/Botao';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Image } from 'react-native-elements';

export default function ProdutoItem({ id, nome, descricao, preco, imagem, quantidade: quantidadeInicial }) {
    //Variáveis de estado (hooks)​
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);
    const navigation = useNavigation();
    //Função para remover itens da lista de desejos​

    async function removeProdListaDesejos(id) {
        //Captura a lista de desejos existente para atualizar o novo item​
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
        //Organiza a lista JSON em string​
        const listaDesejos = JSON.parse(listaDesejosSalva);
        //Converte o objeto JSON em string​
        const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item) => item.id !== id));
        //Guarda a nova lista no AsyncStorage​
        await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
        Alert.alert("Produto removido da Lista de Desejos");
        console.log("Removeu o item da lista");
        //Remonta o componente da Lista de Desejos para atualizar em tempo real​
        navigation.reset({ index: 0, routes: [{ name: 'Lista' }], });
    }
    return <>
        <View style={estilos.produto}>
            <Image style={estilos.imagem} source={imagem} />
            <View style={estilos.conteudo}>
                <View style={estilos.textos}>
                    <Text style={estilos.tituloprod}>{nome}</Text>
                    <Text style={estilos.descricao}>{descricao}</Text>
                </View>
                    <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)} </Text>
                <View style={estilos.carrinho}>
                    <Text style={estilos.subgrupo}>Quantidade: {quantidade} </Text>
                    <Button style={estilos.botao} title="Remover!" onPress={() => removeProdListaDesejos(id)} />
                </View>
            </View>
            
        </View>
    </>
}