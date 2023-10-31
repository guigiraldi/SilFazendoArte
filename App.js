import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Home from './src/telas/Home';

import CatalogoMock from './src/mocks/catalogo';
import Catalogo from './src/telas/Catalogo';

import ListaDesejosMock from './src/mocks/listadesejos';
import ListaDeDesejos from './src/telas/ListaDeDesejos';

import Contato from './src/telas/Contato';
import ContatoMock from './src/mocks/contato';

import Produtos from './src/telas/Produtos';
import ListaDesejos from './src/telas/ListaDesejos';
import Foto from './src/telas/Foto';

function MenuCatalogo() {
  return <SafeAreaView>
    <Catalogo {...CatalogoMock} />
    <StatusBar />
  </SafeAreaView>;
}

function MenuListaDesejos() {
  return <SafeAreaView>
    <ListaDeDesejos {...ListaDesejosMock} />
    <StatusBar />
  </SafeAreaView>;
}

function MenuContato() {
  return <SafeAreaView>
    <Contato {...ContatoMock} />
    <StatusBar />
  </SafeAreaView>;
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Catálogo') {
            iconName = focused ? 'basket' : 'basket-outline';
          } else if (route.name === 'Lista de Desejos') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Contato') {
            iconName = focused ? 'call' : 'call-outline';
          } else if (route.name === 'Produtos') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Lista') {
            iconName = focused ? 'list' : 'list-outline';
          } 
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Catálogo" component={MenuCatalogo} options={{ headerShown: false }} />
      <Tab.Screen name="Lista de Desejos" component={MenuListaDesejos} options={{ headerShown: false }} />
      <Tab.Screen name="Contato" component={MenuContato} options={{ headerShown: false }} />
      <Tab.Screen name="Produtos" component={Produtos} options={{ headerShown: false }} />
      <Tab.Screen name="Lista" component={ListaDesejos} options={{ headerShown: false }} />

    </Tab.Navigator>
  )
}

export default function App() {

  //Carregamento da fonte MontSerrat
  const [fonteCarregada] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
  });

  //Checa se a fonte foi carregada antes de abrir o APP
  if (!fonteCarregada) {
    return <View />
  }

  return (
    <NavigationContainer>
      <TabsMenu />
    </NavigationContainer>
  );
}
