import React, { useState } from 'react';
import {
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, TInput } from './styles';

interface PasswordInputProps extends RNTextInputProps {
  icon?: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput({ ...rest }: PasswordInputProps): JSX.Element {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const theme = useTheme();

  return (
    <Container>
      <Feather name="lock" size={24} color={theme.colors.placeholder} />

      <TInput
        {...rest}
        secureTextEntry={!passwordIsVisible}
        placeholderTextColor={theme.colors.input_placeholder}
      />
      <TouchableOpacity
        onPress={() => setPasswordIsVisible(oldState => !oldState)}
      >
        <Feather
          name={!passwordIsVisible ? 'eye' : 'eye-off'}
          size={24}
          color={theme.colors.text}
        />
      </TouchableOpacity>
    </Container>
  );
}
