import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.screen.rem(1.5)}px;
`;

export const NickName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.regurlar};

    font-size: ${theme.screen.rem(1)}px;
    line-height: ${theme.screen.rem(1.7)}px;
  `}

  margin-bottom: 4px;
`;

export const WorkInformation = styled.Text`
  flex-direction: row;
  align-items: center;

  margin-bottom: 4px;
`;

export const Office = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.regurlar};

    font-size: ${theme.screen.rem(1)}px;
    line-height: ${theme.screen.rem(1.7)}px;
  `}
`;

export const CompanyName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.regurlar};

    font-size: ${theme.screen.rem(1)}px;
  `}
  text-decoration: underline;
`;

export const PlaceUser = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlaceUserText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.regurlar};

    font-size: ${theme.screen.rem(1)}px;
    line-height: ${theme.screen.rem(1.7)}px;
  `}
`;
