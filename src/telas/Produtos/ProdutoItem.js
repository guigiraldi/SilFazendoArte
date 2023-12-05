import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import CampoInteiro from '../../componentes/CampoInteiro';
import Botao from '../../componentes/Botao';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Image } from 'react-native-elements';
import Texto from '../../componentes/Texto';

export default function ProdutoItem({ id, nome, descricao, preco, imagem }) {

    //Função para salvar o produto na Lista de Desejos​
    async function addListaDesejos(id, nome, preco, descricao, quantidade, imagem) {
        console.log('addListaDesejos chamada com:', id, nome, preco, descricao, quantidade);

        //item da lista que vem do parâmetro​
        const addProduto = [{ id: id, nome: nome, preco: preco, descricao: descricao, quantidade: quantidade, imagem: imagem }]

        //Captura a lista de desejos existente para atualizar o novo item​
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
        console.log('Lista de Desejos antes da atualização:', listaDesejosSalva);

        //Verifica se a lista já existe - caso de ser a partir do 2º produto​
        if (listaDesejosSalva !== null) {
            //A Lista já tem conteúdo, então temos que complementar​

            //Organiza a lista JSON em string​
            const listaDesejos = JSON.parse(listaDesejosSalva);
            //Guarda no JSON o novo item inserido na lista​

            listaDesejos.push({ id: id, nome: nome, preco: preco, descricao: descricao, quantidade: quantidade, imagem: imagem });
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

        console.log('Lista de Desejos após a atualização:', await AsyncStorage.getItem('ListaDesejos'));
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
        console.log('Expandir antes:', expandir);
        setExpandir(!expandir);

        //Volta a quantidade para o estado padrão​
        atualizaQuantidadeTotal(1);
        console.log('Expandir depois:', expandir);
    }

    return (
        <>
            <TouchableOpacity style={estilos.produto} onPress={inverteExpandir}>
                <Image style={estilos.imagem} source={imagem} />
                <View style={estilos.conteudo}>
                    <View style={estilos.textos}>
                        <Text style={estilos.tituloprod}>{nome}</Text>
                        <Texto style={estilos.descricao}>{descricao}</Texto>
                    </View>
                    <View style={estilos.base}>
                        <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)} </Text>
                    </View>
                </View>
            </TouchableOpacity>
    
            {expandir && (
                <View style={estilos.carrinho}>
                    <View style={estilos.linhas}>
                        <View style={estilos.valor}>
                            <Text style={estilos.subgrupo}>Quantidade:</Text>
                            <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} />
                        </View>

                        <View style={estilos.valor}>
                            <Text style={estilos.subgrupo}>Total:</Text>
                            <Text style={estilos.precoTotal}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</Text>
                        </View>
                    </View>
                    <Button
                        style={estilos.botao}
                        title="Adicionar"
                        onPress={async () => await addListaDesejos(id, nome, preco, descricao, quantidade, imagem)}
                    />
                </View>
            )}
        </>
    );    
    
}

