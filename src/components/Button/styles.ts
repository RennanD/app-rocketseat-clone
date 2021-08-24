import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

type ContainerProps = {
  color: 'shape' | 'purple';
};

export const Container = styled(RectButton)<ContainerProps>`
  height: 50px;
  width: 180px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

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
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-family: ${theme.fonts.regurlar};
  `}
`;
