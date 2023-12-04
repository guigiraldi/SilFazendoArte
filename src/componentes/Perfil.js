import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Texto from './Texto';
import { useNavigation } from '@react-navigation/native';
import ImagemEstatica from '../../assets/perfil.png';

export default function Perfil({ isVisible, onClose }) {
  const navigation = useNavigation();
  const [perfilImage, setPerfilImage] = useState(require('../../assets/perfil.png'));

  const abrirTelaFoto = () => {
    const novoCaminho = obterCaminhoDaImagemDinamicamente();
    setPerfilImage(String(novoCaminho));
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          console.log('Valor de perfilImage:', perfilImage);
          <Image source={{ uri: perfilImage }} style={{ ...styles.perfil, width: 100, height: 100 }} />
        </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity onPress={abrirTelaFoto}>
          <Image source={ImagemEstatica} style={{ ...styles.perfil, width: 100, height: 100 }} />
          </TouchableOpacity>
          <Texto style={styles.texto}>Bem-vindo ao app Sil Fazendo Arte!</Texto>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  closeButton: {
    padding: 10,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  perfil: {
    alignSelf: 'center',
  },
  texto: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
