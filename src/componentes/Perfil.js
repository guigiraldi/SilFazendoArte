import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Texto from './Texto';
import { useNavigation } from '@react-navigation/native';

export default function Perfil({ isVisible, onClose }) {
  const navigation = useNavigation();

  const abrirTelaFoto = () => {
    navigation.navigate('Tire uma Foto!');
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
            <Image source={require('../../assets/seta.png')} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity onPress={abrirTelaFoto}>
            <Image source={require('../../assets/perfil.png')} style={styles.perfil} />
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
