import { createNavigatorFactory } from "@react-navigation/native";
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
    video: {
        width: 400,
        height: 250,
        alignSelf: "center",
    }
});