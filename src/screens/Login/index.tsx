import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
  Container,
  Header,
  MobileVersion,
  Form,
  FormTitle,
  FormDescription,
  LoginButton,
  LoginButtonText,
  HelpContainer,
  HelpLink,
  HelpLinkText,
  HelpText,
  SocialLoginContainer,
  SocialLoginText,
  SocialLoginButton,
  Content,
  Footer,
} from './styles';

import { TextInput } from '../../components/TextInput';
import { PasswordInput } from '../../components/PasswordInput';

import LogoImage from '../../assets/icons/logo.svg';

type NavigationProps = {
  navigate: (screen: string) => void;
};

export function Login(): JSX.Element {
  const theme = useTheme();

  const navigation = useNavigation<NavigationProps>();

  function handleNavigateToProfile() {
    navigation.navigate('Profile');
  }

  return (
    <Container>
      <KeyboardAvoidingView enabled behavior="position">
        <Content>
          <Header>
            <LogoImage />
            <MobileVersion>v1.0</MobileVersion>
          </Header>

          <Form>
            <FormTitle>Faça seu login</FormTitle>
            <FormDescription>
              Digite suas credenciais para continuar{'\n'}estudando e evoluindo.
            </FormDescription>

            <TextInput
              icon="mail"
              placeholder="E-mail"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <PasswordInput placeholder="Senha" />

            <LoginButton onPress={handleNavigateToProfile}>
              <LoginButtonText>ENTRAR</LoginButtonText>
            </LoginButton>

            <HelpContainer>
              <HelpLink>
                <HelpLinkText>Esqueci minha senha, </HelpLinkText>
              </HelpLink>
              <HelpText>câmbio.</HelpText>
            </HelpContainer>

            <SocialLoginContainer>
              <SocialLoginText>Ou entre com</SocialLoginText>
              <SocialLoginButton onPress={handleNavigateToProfile}>
                <Ionicons
                  name="ios-logo-apple"
                  size={24}
                  color={theme.colors.label}
                />
              </SocialLoginButton>
              <SocialLoginButton onPress={handleNavigateToProfile}>
                <Ionicons
                  name="ios-logo-github"
                  size={24}
                  color={theme.colors.label}
                />
              </SocialLoginButton>
            </SocialLoginContainer>
          </Form>
        </Content>
      </KeyboardAvoidingView>
      <Footer>
        <HelpContainer>
          <HelpText>Não tem uma conta? </HelpText>
          <HelpLink>
            <HelpLinkText>Cadastre-se</HelpLinkText>
          </HelpLink>
        </HelpContainer>
      </Footer>
    </Container>
  );
}
