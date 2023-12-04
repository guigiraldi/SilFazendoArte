import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import estilos from './estilos';
import Botao from '../../componentes/Botao';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function ProdutoItem({ id, nome, descricao, preco, quantidade: quantidadeInicial }) {
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
        navigation.reset({ index: 0, routes: [{ name: 'Lista Desejos' }], });
    }

    //Função para limpar o AsyncStorage​
    const clearAsyncStorage = async () => {
        try {
            await AsyncStorage.clear();
            console.log('AsyncStorage limpo com sucesso');
            Alert.alert("Lista de Desejos excluída com sucesso.");
            //Remonta o componente da Lista de Desejos para atualizar em tempo real​

            navigation.reset({ index: 0, routes: [{ name: 'Lista Desejos' }], });
        } catch (error) {
            console.error('Erro ao limpar o AsyncStorage:', error);
        }
    };

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
            <Botao texto='Remover da Lista de Desejos' style={estilos.botao} onPress={() => removeProdListaDesejos(id)} />
        </View>
        <View style={estilos.divisor} />
    </>
}
