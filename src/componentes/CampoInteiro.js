import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function CampoInteiro({ valor, acao }){
    const numeroString = String(valor);

    const atualiza = (novoValor, acaoRetorno)=>{
        // Abertura //
        // ^ se não estiver
        // [0-9] entre 0 e 9
        // * ocorrências
        // $ pesquisar até o final
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        
        if(!verificaInteiro) return;

        const removeZeros= novoValor.replace(/^(0)(.+)/, '$2');

        acaoRetorno(removeZeros);
    }

    return <TextInput
                style={estilos.campo}
                keyboardType="number-pad"
                onChangeText={(novoValor)=>{atualiza(novoValor,acao)}}
                value={numeroString}
            />
}

const estilos = StyleSheet.create({
    campo: {
        height: 25,
        borderWidth: 0,
        borderColor: 'gray',
        textAlign: 'center',
    }
})