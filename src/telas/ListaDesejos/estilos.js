import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    nome: {
        color: "orange",
        fontWeight: 'bold',
        fontSize: 20
    },
    descricao: {
        color: "black",
        fontSize: 16
    },
    preco: {
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 8,
    },
    produtos: {
        padding: 24,
    },
    listadesejos: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    posicao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap',
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomColor: "purple",
        borderBottomWidth: 1,
    },
    produto: {
        marginBottom: 15,
        width: 330,
        height: 180,
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
    conteudo: {
        width: 215,
        alignItems: "center",
    },
    imagem: {
        marginTop: 15,
        marginLeft: 15,
        width: 100,
        height: 120,
        borderRadius: 5,
    },
    textos: {
        marginTop: 15,
        alignItems: "center",
    },
    tituloprod: {
        fontWeight: "bold",
        fontSize: 18,
    },
    descricao: {
        marginTop: 10,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 10,
        width: 150,
    },
    base: {
        position: "absolute",
        bottom: 13,
        flexDirection: "row",
    },
    preco: {
        color: 'purple',
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 20,
    },
    video: {
        width: 400,
        height: 250,
        alignSelf: "center",
    },
    valor: {
        flexDirection: "row",

        marginLeft: 1,  // Adicione esta linha para ajustar o espaço à esquerda
        marginRight: 1, // Adicione esta linha para ajustar o espaço à direita
    },
    precoTotal: {
        color: 'purple',
        fontWeight: "bold",
        fontSize: 20,
    },
    subgrupo: {
        marginTop: 10,
        marginRight: 40,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 10,
    },
    
    carrinho: {
        padding: 10,
        flexDirection: "row",
    },

    linhas: {
        marginRight: 80,
    },
});