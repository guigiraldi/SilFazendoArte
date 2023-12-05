import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Texto from '../../componentes/Texto';

export default function Foto({ route }) {
  const { updatePerfilImage } = route.params || {};
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = React.useRef(null);

  if (!permission) {
    return <View />;
  }
  
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Autorize acessar a câmera do seu celular.</Text>
        <Button onPress={requestPermission} title="Autorizar" />
      </View>
    );
  }

  const tirarFoto = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setCapturedImage(uri);
      await AsyncStorage.setItem('Foto', uri.toString()); // Certifique-se de converter para string
  
      if (updatePerfilImage) {
        updatePerfilImage(uri);
      }
    }
  };
  

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.content}>
          {/* Use o ImageBackground para criar um botão de tirar foto redondo */}
          <TouchableOpacity style={styles.captureButton} onPress={tirarFoto}>
            <ImageBackground
              source={require('../../../assets/tirarFoto.png')}
              style={styles.captureButtonBackground}
            >
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity style={styles.toggleCameraButton} onPress={toggleCameraType}>
        {/* Adicione a imagem para o botão de alternar câmera */}
        <Image source={require('../../../assets/alternar.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      {capturedImage && typeof capturedImage === 'string' && (
        <Image source={{ uri: capturedImage }} style={{ flex: 1 }} />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: 'white',
  },

  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  toggleCameraButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  captureButton: {
    marginBottom: 20, // Espaço entre o botão e a borda inferior da tela
  },
  captureButtonBackground: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});