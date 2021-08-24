import React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, TInput } from './styles';

interface TextInputProps extends RNTextInputProps {
  icon?: React.ComponentProps<typeof Feather>['name'];
}

export function TextInput({ icon, ...rest }: TextInputProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      {icon && (
        <Feather name={icon} size={24} color={theme.colors.placeholder} />
      )}
      <TInput {...rest} placeholderTextColor={theme.colors.input_placeholder} />
    </Container>
  );
}
