import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonText, Container } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: 'shape' | 'purple';
}

export function Button({
  title,
  color = 'shape',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container color={color} {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
