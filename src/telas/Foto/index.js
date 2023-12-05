import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ImageBackground, Button } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Foto({ route }) {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    // Pode adicionar lógica de inicialização aqui se necessário
  }, []);

  if (!permission) {
    // Carregando as permissões da câmera
    return <View />;
  }

  if (!permission.granted) {
    // Pede autorização para acessar a câmera
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
      console.log("tirou foto");
      setCapturedImage(uri);
      // Guarda a imagem no AsyncStorage
      await AsyncStorage.setItem('Foto', uri);
    }
  };

  const toggleCameraType = () => {
    setType(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.captureButton} onPress={tirarFoto}>
            <ImageBackground
              source={require('../../../assets/tirarFoto.png')}
              style={styles.captureButtonBackground}
            />
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity style={styles.toggleCameraButton} onPress={toggleCameraType}>
        <Image source={require('../../../assets/alternar.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      {capturedImage && <Image source={{ uri: capturedImage }} style={{ flex: 1 }} />}
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
    marginBottom: 20,
  },
  captureButtonBackground: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
