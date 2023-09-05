import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import Texto from '../../componentes/Texto';
import CampoInteiro from "../../componentes/CampoInteiro";
import estilos from './estilos';

export default function Item ({nome, descricao, preco, quantidade: qtdeInicial}){

    const [quantidade, setQuantidade] = useState(qtdeInicial);
    const [total, setTotal] = useState(preco * qtdeInicial);

    //Método de cálculo do valor total
    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco);
    }

    //Método que chama a validação da qtde e o cálculo do valor total
    const atualizaQtdeTotal = (novaQtde) => {
        setQuantidade(novaQtde);
        calculaTotal(novaQtde);
    }

    return <> 
        <View style={estilos.produtos}>
            <Texto style={estilos.nome}>{ nome }</Texto>
            <Texto style={estilos.descricao}>{ descricao }</Texto>
            <Texto style={estilos.preco}>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco) } </Texto>
        </View>
        <View style={estilos.listadesejos}>
            <View style={estilos.posicao}>
                <Texto>Quantidade </Texto>
                <CampoInteiro valor={qtdeInicial} acao={atualizaQtdeTotal}/>
            </View>
            <View style={estilos.posicao}>
                <Texto>Total </Texto>
                <Texto>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total) }</Texto>
            </View>
            <Button title="Remover"/>
        </View>
        <View style={estilos.divisor}></View>
    </>
}