import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

type ContainerProps = {
  color: 'shape' | 'purple';
};

export const Container = styled(RectButton)<ContainerProps>`
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    height: ${theme.screen.rem(3.5)}px;
    width: ${theme.screen.rem(13)}px;
    border-radius: ${theme.screen.rem(0.5)}px;
  `}

  ${({ color, theme }) =>
    color === 'shape'
      ? css`
          background-color: ${theme.colors.shape};
        `
      : css`
          background-color: ${theme.colors.primary};
        `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.screen.rem(1.2)}px;
    color: ${theme.colors.label};
    font-family: ${theme.fonts.medium};
  `}
`;
