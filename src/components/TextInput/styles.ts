import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    height: ${theme.screen.rem(4)}px;
    border-radius: ${theme.screen.rem(0.4)}px;
    padding: 0 ${theme.screen.rem(1.5)}px;
    margin-bottom: ${theme.screen.rem(0.6)}px;
  `}
`;

export const TInput = styled(TextInput)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.screen.rem(1.1)}px;

  ${({ theme }) => css`
    font-size: ${theme.screen.rem(1)}px;
    color: ${theme.colors.text};
    padding: 0 ${theme.screen.rem(1.5)}px;
    font-family: ${theme.fonts.medium};
  `}
`;
