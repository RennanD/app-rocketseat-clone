import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.screen.rem(1.5)}px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.placeholder};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-size: ${theme.screen.rem(1.7)}px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const AboutContainer = styled.View`
  padding: ${({ theme }) => theme.screen.rem(1.5)}px;
`;

export const AboutText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.screen.rem(1.2)}px;
    font-family: ${theme.fonts.regurlar};
  `}
`;

export const Footer = styled.View`
  width: 100%;

  padding: ${({ theme }) => theme.screen.rem(1.5)}px;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.placeholder}; ;
`;

export const SocialLinksContainer = styled.View`
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap;
`;

export const SocialLinkButton = styled(RectButton)`
  ${({ theme }) => css`
    padding: ${theme.screen.rem(1)}px;
    background-color: ${theme.colors.shape};

    margin-right: ${theme.screen.rem(0.7)}px;

    border-radius: ${theme.screen.rem(0.3)}px;
  `}

  flex-direction: row;
  align-items: center;
`;

export const SocialLinkText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.label};
    font-size: ${theme.screen.rem(1)}px;
    font-family: ${theme.fonts.regurlar};
  `}

  margin-left: 10px;
`;
