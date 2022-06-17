import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';
import { OnBoarding } from '../screens/OnBoarding';
import { Login } from '../screens/Login';
import { AppRoutes } from './app.routes';

const { Navigator, Screen } = createStackNavigator();

export function Routes(): JSX.Element {
  const theme = useTheme();

  const myTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
    },
  };

  return (
    <NavigationContainer theme={myTheme}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="OnBoarding" component={OnBoarding} />
        <Screen name="Login" component={Login} />
        <Screen name="AppRoutes" component={AppRoutes} />
      </Navigator>
    </NavigationContainer>
  );
}
