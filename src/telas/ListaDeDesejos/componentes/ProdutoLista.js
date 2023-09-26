import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Alert, Dimensions, Button } from "react-native";
import Texto from "../../../componentes/Texto";

const { width } = Dimensions.get('window');

export default function ProdutoLista({ produto: { titulo, descricao, imagem, id } }) {
    return <View key={id} style={estilos.tudo}>
        <View style={estilos.produto}>
            <Image source={imagem} style={estilos.imagem} />
            <View style={estilos.conteudo}>

                <View style={estilos.textos}>
                    <Texto style={estilos.tituloprod}>{titulo}</Texto>
                    <Texto style={estilos.descricao}>{descricao}</Texto>
                </View>

                <View style={estilos.base}>
                    {/* Aqui vai ficar o botão la pra pessoa acrescentar ou diminuir a quantidade do produto escolhido (Esse botão ai embaixo é só pra nao ficar sem nada) */}
                    <Button style={estilos.botao} title="Remover" onPress={() => setAudioStatus(!audioStatus)}/>
                </View>

            </View>
        </View>
    </View>
}

const estilos = StyleSheet.create({
    produto: {
        marginBottom: 15,
        width: 330,
        height: 150,
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
        marginTop: 20,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 10,
        width: 150,
    },
    botao: {
        marginTop: 10,
        width: 100,
        height: 40,
        backgroundColor: "#660066",
        borderRadius: 5,
        justifyContent: "center",
    },
    botaoTexto: {
        textAlign: "center",
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "bold",
    }
})