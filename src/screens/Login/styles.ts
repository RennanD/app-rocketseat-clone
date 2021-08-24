import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background_secondary};
  padding: ${({ theme }) => theme.screen.rem(1.5)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    padding-top: ${getStatusBarHeight() + theme.screen.rem(1.5)}px;
  `}
`;

export const MobileVersion = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.screen.rem(1)}px;
    color: ${theme.colors.placeholder};
    font-family: ${theme.fonts.regurlar};
  `}
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
`;

export const FormTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.screen.rem(2.3)}px;
    color: ${theme.colors.title};
    font-family: ${theme.fonts.bold};

    margin-bottom: ${theme.screen.rem(0.6)}px;
  `}
`;

export const FormDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.screen.rem(1.1)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.regurlar};
    line-height: ${theme.screen.rem(2)}px;

    margin-bottom: ${theme.screen.rem(2)}px;
  `}
`;
