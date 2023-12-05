// ProdutoItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default function ProdutoItem({ produto, onRemoverPress }) {
    const { id, titulo, preco, descricao, imagem, quantidade } = produto;

    return (
        <View style={estilos.produto}>
            <Image source={imagem} style={estilos.imagem} />
            <View style={estilos.conteudo}>
                <View style={estilos.textos}>
                    <Text style={estilos.tituloprod}>{titulo}</Text>
                    <Text style={estilos.descricao}>{descricao}</Text>
                </View>
                <View style={estilos.base}>
                    <Text style={estilos.preco}>{`R$ ${preco.toFixed(2)}`}</Text>
                    <Text style={estilos.quantidade}>{`Quantidade: ${quantidade}`}</Text>
                    <Button style={estilos.botaoRemover} title="Remover" onPress={() => onRemoverPress(id)}/>
                </View>
            </View>
        </View>
    );
}



