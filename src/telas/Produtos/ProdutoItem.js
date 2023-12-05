import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import CampoInteiro from '../../componentes/CampoInteiro';
import Botao from '../../componentes/Botao';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProdutoItem({ id, nome, descricao, preco }) {

    //Função para salvar o produto na Lista de Desejos​
    async function addListaDesejos(id, nome, preco, descricao, quantidade) {

        //item da lista que vem do parâmetro​
        const addProduto = [{ id: id, nome: nome, preco: preco, descricao: descricao, quantidade: quantidade, }]

        //Captura a lista de desejos existente para atualizar o novo item​
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        //Verifica se a lista já existe - caso de ser a partir do 2º produto​
        if (listaDesejosSalva !== null) {
            //A Lista já tem conteúdo, então temos que complementar​

            //Organiza a lista JSON em string​
            const listaDesejos = JSON.parse(listaDesejosSalva);
            //Guarda no JSON o novo item inserido na lista​

            listaDesejos.push({ id: id, nome: nome, preco: preco, descricao: descricao, quantidade: quantidade, });
            //Converte o objeto JSON em string​

            const listaDesejosAtualizada = JSON.stringify(listaDesejos);
            //Guarda a nova lista no AsyncStorage​

            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            Alert.alert("Produto inserido com sucesso na Lista de Desejos");
            console.log("Inseriu mais um item na lista");
        } else {
            //ASyncStorage está vazio, inclui o primeiro item​

            //Converte a lista para String​

            const listaDesejosAtualizada = JSON.stringify(addProduto);

            //Guarda o produto no AsyncStorage​
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            Alert.alert("Produto inserido com sucesso na Lista de Desejos");
            console.log("Inseriu o item na lista.");
        }
    }

    //Variáveis de estado (hooks)​
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    //Métodos​
    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    }

    const inverteExpandir = () => {
        //Pega o estado atual do expandir e nega ele​
        setExpandir(!expandir);

        //Volta a quantidade para o estado padrão​
        atualizaQuantidadeTotal(1);
    }

    return <>
        <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)} </Text>
        </TouchableOpacity>
        {expandir &&
            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Quantidade:</Text>
                        <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} />
                    </View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Total:</Text>
                        <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)} </Text>
                    </View>
                </View>
                <Botao texto='Adicionar na Lista de Desejos' style={estilos.botao} onPress={() => addListaDesejos(id, nome, preco, descricao, quantidade)} />
            </View>
        }
        <View style={estilos.divisor} />
    </>
}

