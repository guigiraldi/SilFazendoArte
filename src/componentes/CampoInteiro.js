import React from "react";
import { TextInput, View } from "react-native";

export default function CampoInteiro({ valor, acao }) {
  const numeroString = String(valor);

  const atualiza = (novovalor, acaoRetorno) => {
    // Abertura //
    // ^ se não estiver
    // [0-9] entre 0 e 9
    // * ocorrências
    // $ pesquisar até o final
    const verificaInteiro = novovalor.match(/^[0-9]*$/);

    if(!verificaInteiro) return;

    const removeZeros = novovalor.replace(/^(0)(.)/, '$2');
    acaoRetorno(removeZeros);
  }

  return <>
    <TextInput
      keyboardType = "number-pad"
      onChangeText={(novovalor) => {atualiza(novovalor, acao)}}
      value = {numeroString}
    />
  </>
}