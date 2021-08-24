import styled, { css } from 'styled-components/native';

import { Dimensions } from 'react-native';

type TitleProps = {
  fontSize: number;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageContainer = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width}px;

  align-items: center;
  justify-content: center;
`;
export const HeroImage = styled.Image`
  margin-bottom: ${({ theme }) => theme.screen.rem(2)}px;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, fontSize }) => css`
    color: ${theme.colors.title};
    font-size: ${theme.screen.rem(fontSize)}px;
    font-family: ${theme.fonts.bold};
  `}

  text-align: center;
  margin-bottom: ${({ theme }) => theme.screen.rem(1)}px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.screen.rem(1)}px;
    font-family: ${theme.fonts.regurlar};
    letter-spacing: 0.5px;
    line-height: ${theme.screen.rem(1.8)}px;
  `}

  text-align: center;
  margin-bottom: ${({ theme }) => theme.screen.rem(2.5)}px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -${({ theme }) => theme.screen.rem(7)}px;

  align-items: center;
`;

export const BulletsContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.screen.rem(3)}px;
`;
