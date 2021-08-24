import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoarding } from '../screens/OnBoarding';

const { Navigator, Screen } = createStackNavigator();

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="OnBoarding" component={OnBoarding} />
      </Navigator>
    </NavigationContainer>
  );
}
