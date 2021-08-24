import React from 'react';
import { Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

import { useTheme } from 'styled-components';
import { Container } from './styles';

import AstronautImage from '../../assets/images/astronaut.png';
import ConnectImage from '../../assets/images/connect.png';
import LessonsImage from '../../assets/images/lessons.png';

export function OnBoarding(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <Onboarding
        pages={[
          {
            backgroundColor: theme.colors.background,
            image: <Image source={AstronautImage} />,
            title: 'Olá,\ntripulante',
            titleStyles: {
              fontFamily: theme.fonts.bold,
              fontSize: 36,
              color: theme.colors.title,
            },
            subtitle: 'Nossas boas-vindas a\nVersão Beta 1.0',
            subTitleStyles: {
              fontSize: 16,
              fontFamily: theme.fonts.regurlar,
              lineHeight: 24,
              letterSpacing: 0.5,
            },
          },
          {
            backgroundColor: theme.colors.background,
            image: <Image source={ConnectImage} />,
            title: 'O mobile,\nestá em evolução',
            titleStyles: {
              fontFamily: theme.fonts.bold,
              fontSize: 36,
              color: theme.colors.title,
            },
            subtitle:
              'Nessa versão você pode expandir sua rede,\nver suas conexões, controlar seu perfil, seus\ndados e ver notificações',
            subTitleStyles: {
              fontSize: 16,
              fontFamily: theme.fonts.regurlar,
              lineHeight: 24,
              letterSpacing: 0.5,
            },
          },
          {
            backgroundColor: theme.colors.background,
            image: <Image source={LessonsImage} />,
            title: 'Olá,\ntripulante',
            titleStyles: {
              fontFamily: theme.fonts.bold,
              fontSize: 36,
              color: theme.colors.title,
            },
            subtitle: 'Aulas e novos\nrecursos em breve',
            subTitleStyles: {
              fontSize: 16,
              fontFamily: theme.fonts.regurlar,
              lineHeight: 24,
              letterSpacing: 0.5,
            },
          },
        ]}
      />
    </Container>
  );
}
