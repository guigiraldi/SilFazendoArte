import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Texto from "../../../../componentes/Texto";
import Botao from "../../../../componentes/Botao";

const { width } = Dimensions.get('window');

export default function ProdutoOferta({ imagem, descricaoprod, titulo, precoantigo, preconovo, desconto }) {
    return <>
        <View style={estilos.prod}>
            <Image source={imagem} style={estilos.imagem} />
            <View style={estilos.conteudo}>
                <Texto style={estilos.nomeprod}>{titulo}</Texto>
                <Texto style={estilos.descprod}>{descricaoprod}</Texto>
                <View style={estilos.precos}>
                    <Texto style={estilos.precoantigo}>{precoantigo}</Texto>
                    <Texto style={estilos.preconovo}>{preconovo}</Texto>
                </View>
                <Botao style={estilos.botao} botao="Conferir já" />
                <View style={[estilos.descontocontainer, { backgroundColor: "#660066" }]}>
                    <Texto style={estilos.desconto}>- {desconto}</Texto>
                </View>
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({
    prod: {
        marginTop: 2,
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
    precos: {
        flexDirection: "row",
        marginBottom: 3,
    },
    precoantigo: {
        fontWeight: "bold",
        color: "#888888",
        fontSize: 15,
        textDecorationLine: "line-through",
        marginRight: 10,
    },
    preconovo: {
        fontWeight: "bold",
        fontSize: 15,
    },
    descontocontainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 8,
    },

    desconto: {
        fontSize: 10,
        color: 'white',
        fontWeight: "bold",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
    },
})