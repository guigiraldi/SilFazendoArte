import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Topo from "../../componentes/Topo";
import Carrossel from "./componentes/Carrossel";
import Ofertas from "./componentes/Ofertas/Ofertas";
import Novidades from "./componentes/Novidades/Novidades";

export default function Home() {
  return <>
    <Topo titulo="Bem Vindo!" />
    <Carrossel />
    <Ofertas />
    <Novidades />
  </>
}

