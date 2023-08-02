import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
    //Determina o layout padrão da fonte
    let estilo = estilos.texto;

    //Verifica se o BOLD está sendo solicitado
    if (style?.fontWeight === "bold") {
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontSerratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontSerratBold",
        fontWeight: "normal",
    }
})