import React from "react";
import { FlatList } from "react-native";
import { Video, ResizeMode } from 'expo-av';
import Item from "./Item";
import TelaPadrao from "../../componentes/TelaPadrao";
import estilos from './estilos';

const produtos = [
    {
        id: 1,
        nome: "CESTA INVERNO",
        descricao: "Cesta de frutas de inverno.",
        preco: 79.9
    },
    {
        id: 2,
        nome: "CESTA VERÃO",
        descricao: "Cesta de frutas de verão",
        preco: 89.9
    },
    {
        id: 3,
        nome: "CESTA ESTAÇÕES",
        descricao: "Uma cesta com frutas da estação vigente.",
        preco: 99.9
    }
];

export default function Produtos (){

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    
    return (
        <TelaPadrao>
            <Video ref={video}
                style={estilos.video}
                source={require('./../../../assets/video.mp4')}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)} 
            />
            <FlatList
                data={produtos}
                renderItem={({item})=>(<Item {...item}/>)}
                keyExtractor={({id})=>(String(id))}
            />
        </TelaPadrao>
    );
}
