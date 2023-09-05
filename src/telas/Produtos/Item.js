import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity } from "react-native";

import Texto from '../../componentes/Texto';
import CampoInteiro from "../../componentes/CampoInteiro";
import estilos from './estilos';

export default function Item ({nome, descricao, preco}){

    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    //Método de cálculo do valor total
    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco);
    }

    //Método que chama a validação da qtde e o cálculo do valor total
    const atualizaQtdeTotal = (novaQtde) => {
        setQuantidade(novaQtde);
        calculaTotal(novaQtde);
    }

    //Método que abre e fecha os produtos
    const inverteExpandir = () => {
        //Negar o estado atual
        setExpandir(!expandir);
    }

    return <> 
        <TouchableOpacity style={estilos.produtos} onPress={inverteExpandir}>
            <Texto style={estilos.nome}>{ nome }</Texto>
            <Texto style={estilos.descricao}>{ descricao }</Texto>
            <Texto style={estilos.preco}>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco) } </Texto>
        </TouchableOpacity>
        {expandir && 
            <View style={estilos.listadesejos}>
                <View style={estilos.posicao}>
                    <Texto>Quantidade </Texto>
                    <CampoInteiro valor={quantidade} acao={atualizaQtdeTotal}/>
                </View>
                <View style={estilos.posicao}>
                    <Texto>Total </Texto>
                    <Texto>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total) }</Texto>
                </View>
                <Button title="Adicionar"/>
            </View>
        }
        <View style={estilos.divisor}></View>
    </>
}