import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CoverImage = styled.Image`
  width: 100%;
  height: ${({ theme }) => theme.screen.rem(6)}px;
`;

export const SectionCard = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
    margin-bottom: ${theme.screen.rem(1.5)}px;
  `}
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.screen.rem(1.5)}px;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.screen.rem(1)}px;
`;

export const UserInfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const UserAvatarContainer = styled.View`
  ${({ theme }) => css`
    height: ${theme.screen.rem(4.6)}px;
    width: ${theme.screen.rem(4.6)}px;

    border-radius: ${theme.screen.rem(2.3)}px;

    border: 2px solid ${theme.colors.placeholder};
  `}

  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.Image`
  ${({ theme }) => css`
    height: ${theme.screen.rem(4)}px;
    width: ${theme.screen.rem(4)}px;

    border-radius: ${theme.screen.rem(2)}px;
  `}
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.medium};

    font-size: ${theme.screen.rem(1.7)}px;

    margin-left: ${theme.screen.rem(1)}px;
    line-height: ${theme.screen.rem(1.7)}px;
  `}
`;

export const Footer = styled.View`
  width: 100%;

  padding: ${({ theme }) => theme.screen.rem(1.5)}px;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.placeholder};

  align-items: center;
  justify-content: center;
`;

export const MemberPeriodText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.input_placeholder};
    font-family: ${theme.fonts.regurlar};

    font-size: ${theme.screen.rem(1)}px;
    line-height: ${theme.screen.rem(1.7)}px;
  `}
`;
