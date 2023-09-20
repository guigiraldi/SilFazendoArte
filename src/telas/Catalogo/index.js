import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Topo from "../../componentes/Topo";
import Produto from "./componentes/Produto";
import { Video, ResizeMode } from 'expo-av';

export default function Catalogo({ topo, produtos }) {

  const renderProduto = ({ item }) => (
    <Produto produto={item} />
  );

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <FlatList
      ListHeaderComponent={() => {
        return <>
          <Topo {...topo} />
          <Video ref={video}
                style={estilos.video}
                source={require('../../../assets/video.mp4')}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)} 
            />
        </>
      }}

      data={produtos.lista}
      renderItem={renderProduto}
      keyExtractor={({ id }) => id}
    />
  );
}

const estilos = StyleSheet.create({
  video: {
    width: 400,
    height: 250,
    alignSelf: "center",
}
});


