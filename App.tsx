import 'react-native-gesture-handler';
import React from 'react';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components/native';

import { StatusBar, Text } from 'react-native';

import { Routes } from './src/routes';

import theme from './src/styles/theme';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <Text>Carregando</Text>;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <Routes />
    </ThemeProvider>
  );
}
