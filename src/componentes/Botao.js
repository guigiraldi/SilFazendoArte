import React from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";

import Texto from './Texto';

export default function Botao({ botao }) {

    return <TouchableOpacity style={estilos.botao} onPress={() => { Alert.alert("Pedido Adicionado a sua Lista de Desejos!") }}>
        <Texto style={estilos.botaoTexto}>{botao}</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao: {
        width: 90,
        height: 30,
        backgroundColor: "#660066",
        borderRadius: 5,
        justifyContent: "center",
    },
    botaoTexto: {
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
    }
})