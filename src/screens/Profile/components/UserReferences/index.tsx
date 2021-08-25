import React from 'react';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import {
  Container,
  NickName,
  CompanyName,
  Office,
  PlaceUser,
  PlaceUserText,
  WorkInformation,
} from './styles';

export function UserReferences(): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <NickName>@rennan-oliveira</NickName>
      <WorkInformation>
        <Office>Mobile Engineer | </Office>

        <CompanyName>Rocketseat</CompanyName>
      </WorkInformation>

      <PlaceUser>
        <Feather
          name="map-pin"
          size={16}
          color={theme.colors.text}
          style={{ marginRight: 6 }}
        />
        <PlaceUserText>Teresina, PI, Brasil</PlaceUserText>
      </PlaceUser>
    </Container>
  );
}
