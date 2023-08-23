import {React, useState} from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

import Texto from "../../componentes/Texto";
import CampoInteiro from "../../componentes/CampoInteiro";
import estilos from "./estilos";

export default function Item({ nome, descricao, preco }) {

    const [quantidade, setQuantidade] = useState(1)

    return <>
        <View style={estilos.produtos}>
            <Texto style={estilos.nome}> { nome } </Texto>
            <Texto style={estilos.descricao}> { descricao } </Texto>
            <Texto style={estilos.preco}> { preco } </Texto>
        </View>
        <View style={estilos.listadesejos}>
            <View style={estilos.posicao}>
                <Texto>Quantidade: </Texto>
                <CampoInteiro valor = {quantidade} acao = {setQuantidade}/>
            </View>
            <View style={estilos.posicao}>
                <Texto>Preço: </Texto>
                <Texto>0.00</Texto>
            </View>
            <Button title="Adicionar"></Button>
        </View>
    </>
}