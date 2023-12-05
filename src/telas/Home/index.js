import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Topo from "../../componentes/Topo";
import Carrossel from "./componentes/Carrossel";
import Ofertas from "./componentes/Ofertas/Ofertas";
import Novidades from "./componentes/Novidades/Novidades";
import Texto from "../../componentes/Texto";
import axios from 'axios';

export default function Home() {
  const [piadaDoDia, setPiadaDoDia] = useState('');

  useEffect(() => {
    obterPiadaDoDia();
  }, []);

  const obterPiadaDoDia = async () => {
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt');
      const { setup, delivery } = response.data;

      // Verifica se a piada tem uma configuração antes de exibi-la
      const piadaCompleta = setup && delivery ? `${setup} ${delivery}` : setup || delivery;

      setPiadaDoDia(piadaCompleta);
    } catch (error) {
      console.error('Erro ao obter piada:', error);
    }
  };

  return (
    <>
      <Topo titulo="Bem Vindo!" />
      <Carrossel />
        <Texto style={estilos.piadaDoDia}>Piada do dia: {piadaDoDia}</Texto>
        <Ofertas />
        <Novidades />
    </>
  );
}

const estilos = StyleSheet.create({
  piadaDoDia: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
