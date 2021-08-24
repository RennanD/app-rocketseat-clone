import 'react-native-gesture-handler';
import React from 'react';

import { ScreenProvider } from 'responsive-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { StatusBar, Text, View } from 'react-native';
import { ThemeProvider } from './src/styles/ThemProvider';

import { Routes } from './src/routes';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <Text>Carregando</Text>;

  return (
    <SafeAreaProvider>
      <ScreenProvider baseFontSize={14}>
        <ThemeProvider>
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle="light-content"
          />
          <Routes />
        </ThemeProvider>
      </ScreenProvider>
    </SafeAreaProvider>
  );
}
