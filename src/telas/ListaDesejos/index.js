import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProdutoItem from './ProdutoItem';
import TelaPadrao from '../../componentes/TelaPadrao';
import StatusLista from '../../componentes/StatusLista';

export default function ListaDesejos() {

    //Variável de estado da Lista​
    const [listData, setListData] = useState([]);
    // Função para carregar os dados da lista do AsyncStorage
    const loadListData = async () => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if (storedObjectJSON !== null) {
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    };
    // Carregua a lista quando o componente for montado​
    useEffect(() => {
        loadListData();
    }, []);
    //Cálculo do valor total da Lista de Desejos​
    const val_total = listData.reduce((soma, { preco, quantidade }) => soma + (preco * quantidade), 0);
    return <TelaPadrao>
        <StatusLista total={val_total} />
        <FlatList
            data={listData}
            renderItem={({ item }) => <ProdutoItem {...item} />}
            keyExtractor={({ id }) => String(id)} />
    </TelaPadrao>
}