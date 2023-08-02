import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Texto from "../../../../componentes/Texto";
import Botao from "../../../../componentes/Botao";

const { width } = Dimensions.get('window');

export default function ProdutoNovidade({ imagem, descricaoprod, titulo, preco }) {
    return <>
        <View style={estilos.prod}>
            <Image source={imagem} style={estilos.imagem} />
            <View style={estilos.conteudo}>
                <Texto style={estilos.nomeprod}>{titulo}</Texto>
                <Texto style={estilos.descprod}>{descricaoprod}</Texto>
                <Texto style={estilos.preco}>{preco}</Texto>
                <Botao style={estilos.botao} botao="Conferir já" />
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({
    prod: {
        marginTop: 5,
        marginBottom: 10,
        width: width * 0.8,
        height: 120,
        backgroundColor: "#F2F3F4",
        borderRadius: 10,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#C7C7C7",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
        flexDirection: "row",
    },
    imagem: {
        marginTop: 10,
        marginLeft: 10,
        width: 81.3,
        height: 100,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#660066",
    },
    conteudo: {
        marginTop: 5,
        width: 208.7,
        alignItems: "center",
    },
    nomeprod: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 1,
    },
    descprod: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 10,
        width: 150,
        marginBottom: 3,
    },
    preco: {
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 3,
    }
})