import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import { ScreenProvider } from 'responsive-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { StatusBar, View } from 'react-native';
import { ThemeProvider } from './src/styles/ThemProvider';

import { Routes } from './src/routes';

export default function App(): JSX.Element {
  const [isReady, setIsReady] = useState(false);
  const [isLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    showSplashScreen();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setIsReady(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };

    if (isLoaded && isReady) hideSplashScreen();
  }, [isReady, isLoaded]);

  if (!isReady) return <View />;

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
