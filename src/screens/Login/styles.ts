import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled.View`
  /* flex: 1; */

  padding: 0 ${({ theme }) => theme.screen.rem(1.5)}px;
  height: 90%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    padding-top: ${getStatusBarHeight() + theme.screen.rem(1.5)}px;
    margin-bottom: ${theme.screen.rem(3.6)}px;
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
  /* flex: 1; */
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.screen.rem(3)}px;
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

export const LoginButton = styled(RectButton)`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: ${theme.screen.rem(4)}px;

    border-radius: ${theme.screen.rem(0.4)}px;
    padding: 0 ${theme.screen.rem(1.5)}px;
    margin-top: ${theme.screen.rem(0.6)}px;
    margin-bottom: ${theme.screen.rem(2)}px;
  `}
`;

export const LoginButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.screen.rem(1.2)}px;
    color: ${theme.colors.label};
    font-family: ${theme.fonts.medium};
  `}
`;

export const HelpContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* margin-bottom: ${({ theme }) => theme.screen.rem(2)}px; */
`;

export const HelpLink = styled.TouchableOpacity``;

export const HelpLinkText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.screen.rem(1)}px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.medium};
    letter-spacing: 0.5px;
  `}
`;

export const HelpText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.screen.rem(1)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.regurlar};
    letter-spacing: 0.5px;
  `}
`;

export const SocialLoginContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.screen.rem(2)}px;
`;

export const SocialLoginText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.screen.rem(1)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.regurlar};
    letter-spacing: 0.5px;
  `}

  margin-right: 11px;
`;

export const SocialLoginButton = styled(RectButton)`
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    height: ${theme.screen.rem(4)}px;
    width: ${theme.screen.rem(4)}px;
    border-radius: ${theme.screen.rem(0.4)}px;
    background-color: ${theme.colors.shape};
    letter-spacing: 0.5px;
    margin: 0 4px;
  `}
`;

export const Footer = styled.View`
  height: ${({ theme }) => theme.screen.rem(5)}px;
  padding: 0 ${({ theme }) => theme.screen.rem(1.5)}px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.placeholder};

  align-items: center;
  justify-content: center;
`;
