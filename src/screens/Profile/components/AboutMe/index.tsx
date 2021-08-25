import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components';

import { IconButton } from '../../../../components/IconButton';

import {
  Container,
  Header,
  Title,
  AboutContainer,
  AboutText,
  Footer,
  SocialLinksContainer,
  SocialLinkButton,
  SocialLinkText,
} from './styles';

export function AboutMe(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <Title>Sobre mim</Title>
        <IconButton icon="edit" />
      </Header>

      <AboutContainer>
        <AboutText>
          Desenvolvedor Fullstack e Alumni da Rocketseat. {'\n\n'}
          Entusiasta de desenvolvimento mobile com um foco muito grande nas
          melhores tecnologias. {'\n\n'}
          Atuo como Software Engineer e freelancer, com maior parte dos projetos
          como Fullstack, mas bastante empenhado em React Native.
        </AboutText>
      </AboutContainer>

      <Footer>
        <SocialLinksContainer>
          <SocialLinkButton>
            <Ionicons name="logo-github" color={theme.colors.label} size={24} />
            <SocialLinkText>Github</SocialLinkText>
          </SocialLinkButton>

          <SocialLinkButton>
            <Ionicons
              name="logo-linkedin"
              color={theme.colors.label}
              size={24}
            />
            <SocialLinkText>LinkedIn</SocialLinkText>
          </SocialLinkButton>
        </SocialLinksContainer>
      </Footer>
    </Container>
  );
}
