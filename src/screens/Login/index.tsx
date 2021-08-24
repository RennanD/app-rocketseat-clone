import React from 'react';

import {
  Container,
  Header,
  MobileVersion,
  Form,
  FormTitle,
  FormDescription,
} from './styles';

import LogoImage from '../../assets/icons/logo.svg';
import { TextInput } from '../../components/TextInput';
import { PasswordInput } from '../../components/PasswordInput';

export function Login(): JSX.Element {
  return (
    <Container>
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
      </Form>
    </Container>
  );
}
