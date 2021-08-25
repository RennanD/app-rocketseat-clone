import React from 'react';

import { SvgFromUri } from 'react-native-svg';

import { Container } from './styles';

import { IconButton } from '../../../../components/IconButton';

type TechsProps = {
  techs: {
    id: string;
    url: string;
  }[];
};

export function Techs({ techs }: TechsProps): JSX.Element {
  return (
    <Container>
      {techs.map(tech => (
        <IconButton
          key={tech.id}
          icon={{
            svg: <SvgFromUri uri={tech.url} height={48} width={48} />,
          }}
          style={{ marginRight: 10 }}
        />
      ))}
    </Container>
  );
}
