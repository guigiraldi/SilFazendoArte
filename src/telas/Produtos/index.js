import React from 'react';
import { FlatList } from 'react-native';
import ProdutoItem from './ProdutoItem';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilos from './estilos';
import Texto from '../../componentes/Texto';
import Topo from '../../componentes/Topo';
import { Image } from 'react-native-elements';

import PanoDePrato1 from "../../../assets/produtos/panos/PanoDePrato1.jpeg";
import PanoDePrato2 from "../../../assets/produtos/panos/PanoDePrato2.jpeg";
import PanoDePrato3 from "../../../assets/produtos/panos/PanoDePrato3.jpeg";
import PanoDePrato4 from "../../../assets/produtos/panos/PanoDePrato4.jpeg";
import Bolsa1 from "../../../assets/produtos/bolsas/BolsaCroche1.jpeg";
import Bolsa2 from "../../../assets/produtos/bolsas/BolsaCroche2.jpeg";
import Bolsa3 from "../../../assets/produtos/bolsas/BolsaCroche3.jpeg";
import JogoAmericano1 from "../../../assets/produtos/jogosAmericanos/JogoAmericano1.jpeg"
import JogoAmericano2 from "../../../assets/produtos/jogosAmericanos/JogoAmericano2.jpeg"
import JogoAmericano3 from "../../../assets/produtos/jogosAmericanos/JogoAmericano3.jpeg"
import JogoBanheiro1 from "../../../assets/produtos/jogosDeBanheiro/JogoBanheiro1.jpeg"
import JogoBanheiro2 from "../../../assets/produtos/jogosDeBanheiro/JogoBanheiro2.jpeg"
import Pulseira1 from "../../../assets/produtos/pulseiras/PulseiraCristal1.jpeg"
import Pulseira2 from "../../../assets/produtos/pulseiras/PulseiraCristal2.jpeg"
import SunCatcher1 from "../../../assets/produtos/suncatchers/SunCatcher1.jpeg"
import SunCatcher2 from "../../../assets/produtos/suncatchers/SunCatcher2.jpeg"
import SunCatcher3 from "../../../assets/produtos/suncatchers/SunCatcher3.jpeg"
import SunCatcher4 from "../../../assets/produtos/suncatchers/SunCatcher4.jpeg"
import SunCatcher5 from "../../../assets/produtos/suncatchers/SunCatcher5.jpeg"
import SunCatcher6 from "../../../assets/produtos/suncatchers/SunCatcher6.jpeg"
import Toalha1 from "../../../assets/produtos/toalhas/ToalhaLavabo1.jpeg"
import Tapete1 from "../../../assets/produtos/tapetes/TapeteDeCroche1.jpeg"
import Tapete2 from "../../../assets/produtos/tapetes/TapeteDeCroche2.jpeg"
import Passadeira1 from "../../../assets/produtos/passadeira/Passadeira1.jpeg"

const produtos = [
    {
        id: 1,
        nome: "Bolsa de Crochê",
        preco: 30.0,
        descricao: "Bolsa de crochê feita à mão, perfeita para complementar seu visual com estilo e originalidade.",
        imagem: Bolsa1
        },
        {
        id: 2,
        nome: "Bolsa de Crochê",
        preco: 30.0,
        descricao: "Bolsa de crochê feita à mão, perfeita para complementar seu visual com estilo e originalidade.",
        imagem: Bolsa2
        },
        {
        id: 3,
        nome: "Bolsa de Crochê",
        preco: 30.0,
        descricao: "Bolsa de crochê feita à mão, perfeita para complementar seu visual com estilo e originalidade.",
        imagem: Bolsa3
        },
        {
        id: 4,
        nome: "Jogo Americano",
        preco: 37.0,
        descricao: "Conjunto de jogo americano elegante e prático, ideal para tornar suas refeições mais especiais.",
        imagem: JogoAmericano1
        },
        {
        id: 5,
        nome: "Jogo Americano",
        preco: 37.0,
        descricao: "Conjunto de jogo americano elegante e prático, ideal para tornar suas refeições mais especiais.",
        imagem: JogoAmericano2
        },
        {
        id: 6,
        nome: "Jogo Americano",
        preco: 37.0,
        descricao: "Conjunto de jogo americano elegante e prático, ideal para tornar suas refeições mais especiais.",
        imagem: JogoAmericano3
        },
        {
        id: 7,
        nome: "Jogo de Banheiro",
        preco: 45.0,
        descricao: "Jogo de banheiro delicado e charmoso, perfeito para decorar seu banheiro com estilo.",
        imagem: JogoBanheiro1
        },
        {
        id: 8,
        nome: "Jogo de Banheiro",
        preco: 45.0,
        descricao: "Jogo de banheiro delicado e charmoso, perfeito para decorar seu banheiro com estilo.",
        imagem: JogoBanheiro2
        },
        {
        id: 9,
        nome: "Pano de Prato",
        preco: 9.0,
        descricao: "Pano de prato confeccionado com materiais de alta qualidade, ideal para facilitar suas tarefas na cozinha.",
        imagem: PanoDePrato1
        },
        {
        id: 10,
        nome: "Pano de Prato",
        preco: 9.0,
        descricao: "Pano de prato confeccionado com materiais de alta qualidade, ideal para facilitar suas tarefas na cozinha.",
        imagem: PanoDePrato2
        },
        {
        id: 11,
        nome: "Pano de Prato",
        preco: 9.0,
        descricao: "Pano de prato confeccionado com materiais de alta qualidade, ideal para facilitar suas tarefas na cozinha.",
        imagem: PanoDePrato3
        },
        {
        id: 12,
        nome: "Pano de Prato",
        preco: 9.0,
        descricao: "Pano de prato confeccionado com materiais de alta qualidade, ideal para facilitar suas tarefas na cozinha.",
        imagem: PanoDePrato4
        },
        {
        id: 13,
        nome: "Passadeira",
        preco: 50.0,
        descricao: "Passadeira elegante e funcional, perfeita para dar um toque especial à decoração da sua casa.",
        imagem: Passadeira1
        },
        {
        id: 14,
        nome: "Pulseiras de Cristal",
        preco: 30.0,
        descricao: "Conjunto de pulseiras delicadas com cristais, ideais para complementar seus looks com sofisticação.",
        imagem: Pulseira1
        },
        {
        id: 15,
        nome: "Pulseiras de Cristal",
        preco: 30.0,
        descricao: "Conjunto de pulseiras delicadas com cristais, ideais para complementar seus looks com sofisticação.",
        imagem: Pulseira2
        },
        {
        id: 16,
        nome: "SunCatcher",
        preco: 30.0,
        descricao: "SunCatcher artesanal, perfeito para adornar sua casa e capturar a luz de maneira encantadora.",
        imagem: SunCatcher1
        },
        {
        id: 17,
        nome: "SunCatcher",
        preco: 30.0,
        descricao: "SunCatcher artesanal, perfeito para adornar sua casa e capturar a luz de maneira encantadora.",
        imagem: SunCatcher2
        },
        {
        id: 18,
        nome: "SunCatcher",
        preco: 30.0,
        descricao: "SunCatcher artesanal, perfeito para adornar sua casa e capturar a luz de maneira encantadora.",
        imagem: SunCatcher3
        },
        {
        id: 19,
        nome: "SunCatcher",
        preco: 30.0,
        descricao: "SunCatcher artesanal, perfeito para adornar sua casa e capturar a luz de maneira encantadora.",
        imagem: SunCatcher4
        },
        {
        id: 20,
        nome: "SunCatcher",
        preco: 30.0,
        descricao: "SunCatcher artesanal, perfeito para adornar sua casa e capturar a luz de maneira encantadora.",
        imagem: SunCatcher5
        },
        {
        id: 21,
        nome: "SunCatcher",
        preco: 30.0,
        descricao: "SunCatcher artesanal, perfeito para adornar sua casa e capturar a luz de maneira encantadora.",
        imagem: SunCatcher6
        },
        {
        id: 22,
        nome: "Tapete de Crochê",
        preco: 30.0,
        descricao: "Tapete de crochê feito à mão, proporcionando conforto e charme ao ambiente.",
        imagem: Tapete1
        },
        {
        id: 23,
        nome: "Tapete de Crochê",
        preco: 30.0,
        descricao: "Tapete de crochê feito à mão, proporcionando conforto e charme ao ambiente.",
        imagem: Tapete2
        },
        {
        id: 24,
        nome: "Toalha para Lavabo",
        preco: 30.0,
        descricao: "Toalha elegante para lavabo, confeccionada com materiais de alta qualidade para adicionar sofisticação ao seu banheiro.",
        imagem: Toalha1
        }
    ]

export default function Produtos() {
    return <TelaPadrao>
        

        <FlatList

        ListHeaderComponent={() => {
            return <>
            <Topo titulo="Catálogo" />
            </>
        }}
            data={produtos}
            renderItem={({ item }) => <ProdutoItem {...item} />}
            keyExtractor={({ id }) => String(id)} />
    </TelaPadrao>
}