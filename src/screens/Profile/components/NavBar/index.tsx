import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, ActionsContainer } from './styles';

import { IconButton } from '../../../../components/IconButton';

import BurguerMenu from '../../../../assets/icons/burguer-menu.svg';

export function NavBar(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <IconButton icon={{ svg: <BurguerMenu /> }} />

      <ActionsContainer>
        <IconButton icon="search" style={{ marginRight: 20 }} />

        <IconButton
          icon={{
            svg: (
              <AntDesign
                name="adduser"
                size={24}
                color={theme.colors.text}
                style={{ marginRight: 20 }}
              />
            ),
          }}
        />
        <IconButton icon="bell" />
      </ActionsContainer>
    </Container>
  );
}
