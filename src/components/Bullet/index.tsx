import React from 'react';

import { Container } from './styles';

type BulletProps = {
  selected: boolean;
};

export function Bullet({ selected }: BulletProps): JSX.Element {
  return <Container selected={selected} />;
}
