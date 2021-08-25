import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
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

export const CoverImage = styled.Image`
  width: 100%;
  height: ${({ theme }) => theme.screen.rem(5.5)}px;
`;

export const SectionCard = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
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

    font-size: ${theme.screen.rem(1.5)}px;

    margin-left: ${theme.screen.rem(1)}px;
    line-height: ${theme.screen.rem(1.7)}px;
  `}
`;

export const UserReferencesContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.screen.rem(1.5)}px;
`;

export const NickName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.regurlar};

    font-size: ${theme.screen.rem(1)}px;
    line-height: ${theme.screen.rem(1.7)}px;
  `}
`;

export const Office = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.regurlar};

    font-size: ${theme.screen.rem(1)}px;
    line-height: ${theme.screen.rem(1.7)}px;
  `}
`;

export const WorkInformation = styled.Text`
  flex-direction: row;
  align-items: center;
`;

export const CompanyName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.fonts.regurlar};

    font-size: ${theme.screen.rem(1)}px;
    line-height: ${theme.screen.rem(1.7)}px;
  `}
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

export const TechsContainer = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;

  margin-bottom: ${({ theme }) => theme.screen.rem(1.5)}px;
`;

export const Footer = styled.View`
  width: 100%;

  padding: ${({ theme }) => theme.screen.rem(1.5)}px;

  border-top-width: 2px;
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
