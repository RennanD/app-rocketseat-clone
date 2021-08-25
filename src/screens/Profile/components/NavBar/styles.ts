import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    padding: 0 ${theme.screen.rem(1.5)}px;
    padding-top: ${getStatusBarHeight() + theme.screen.rem(1.5)}px;
    padding-bottom: ${theme.screen.rem(0.6)}px;
    background-color: ${theme.colors.background_secondary};
  `}
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
