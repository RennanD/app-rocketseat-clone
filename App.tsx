import 'react-native-gesture-handler';
import React from 'react';

import { ScreenProvider } from 'responsive-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/styles/ThemProvider';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaProvider>
      <ScreenProvider baseFontSize={14}>
        <ThemeProvider>
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle="light-content"
          />
          <Background>
            <Routes />
          </Background>
        </ThemeProvider>
      </ScreenProvider>
    </SafeAreaProvider>
  );
}
