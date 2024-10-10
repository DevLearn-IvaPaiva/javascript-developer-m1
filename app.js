import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Register from './src/pages/Register';
import TabNavigation from './src/TabNavigation';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
//faça comentário sobre o código abaixo e o que ele faz
//O código abaixo é responsável por criar a navegação entre as telas do aplicativo, 
//onde é possível navegar entre a tela de login e a tela principal, que contém as abas de navegação 
//para as outras telas do aplicativo.

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name='Login'
          component={Login}
        />

        <Stack.Screen
          name='Main'
          component={TabNavigation}
          options={{
            headerShown: false
          }
        }
        />
      </Stack.Navigator>


    </NavigationContainer>

  );
}