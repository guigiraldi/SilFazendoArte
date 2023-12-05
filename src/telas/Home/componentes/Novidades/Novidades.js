import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Texto from "../../../../componentes/Texto";
import Botao from "../../../../componentes/Botao";
import ProdutoNovidade from "./ProdutoNovidade";

//Imagens______________________________________________________________________
import PanoDePrato1 from "../../../../../assets/produtos/panos/PanoDePrato1.jpeg";
import PanoDePrato2 from "../../../../../assets/produtos/panos/PanoDePrato1.jpeg";
import PanoDePrato3 from "../../../../../assets/produtos/panos/PanoDePrato1.jpeg";
import PanoDePrato4 from "../../../../../assets/produtos/panos/PanoDePrato1.jpeg";
import Bolsa1 from "../../../../../assets/produtos/bolsas/BolsaCroche1.jpeg";
import Bolsa2 from "../../../../../assets/produtos/bolsas/BolsaCroche2.jpeg";
import Bolsa3 from "../../../../../assets/produtos/bolsas/BolsaCroche3.jpeg";
import JogoAmericano1 from "../../../../../assets/produtos/jogosAmericanos/JogoAmericano1.jpeg"
import JogoAmericano2 from "../../../../../assets/produtos/jogosAmericanos/JogoAmericano2.jpeg"
import JogoAmericano3 from "../../../../../assets/produtos/jogosAmericanos/JogoAmericano3.jpeg"
import JogoBanheiro1 from "../../../../../assets/produtos/jogosDeBanheiro/JogoBanheiro1.jpeg"
import JogoBanheiro2 from "../../../../../assets/produtos/jogosDeBanheiro/JogoBanheiro2.jpeg"
import Pulseira1 from "../../../../../assets/produtos/pulseiras/PulseiraCristal1.jpeg"
import Pulseira2 from "../../../../../assets/produtos/pulseiras/PulseiraCristal2.jpeg"
import SunCatcher1 from "../../../../../assets/produtos/suncatchers/SunCatcher1.jpeg"
import SunCatcher2 from "../../../../../assets/produtos/suncatchers/SunCatcher2.jpeg"
import SunCatcher3 from "../../../../../assets/produtos/suncatchers/SunCatcher3.jpeg"
import SunCatcher4 from "../../../../../assets/produtos/suncatchers/SunCatcher4.jpeg"
import SunCatcher5 from "../../../../../assets/produtos/suncatchers/SunCatcher5.jpeg"
import SunCatcher6 from "../../../../../assets/produtos/suncatchers/SunCatcher6.jpeg"
import Toalha1 from "../../../../../assets/produtos/toalhas/ToalhaLavabo1.jpeg"
import Tapete1 from "../../../../../assets/produtos/tapetes/TapeteDeCroche1.jpeg"
import Tapete2 from "../../../../../assets/produtos/tapetes/TapeteDeCroche2.jpeg"
import Passadeira1 from "../../../../../assets/produtos/passadeira/Passadeira1.jpeg"

export default function Novidades() {
    return <>
        <View style={estilos.tudo}>
            <View style={estilos.topo}>
                <Texto style={estilos.titulo}>Novidades</Texto>
            </View>
            <ProdutoNovidade
                imagem={Passadeira1}
                titulo="Passadeira"
                descricaoprod="Colocar aqui a descrição do produto"
                preco="R$ 50,00"
            />
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        marginTop: 2,
        width: "100%",
        height: 50,
        backgroundColor: "#660066",
        justifyContent: "center",
    },
    titulo: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        marginLeft: 10,
    },
})