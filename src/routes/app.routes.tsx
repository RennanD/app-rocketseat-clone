import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Profile } from '../screens/Profile';
import { Forum } from '../screens/Forum';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(): JSX.Element {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.bullet,
        tabBarStyle: {
          backgroundColor: theme.colors.background_secondary,
          height: 60 + getBottomSpace(),
          borderTopColor: theme.colors.shape,
        },
      }}
    >
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Forum"
        component={Forum}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
