import React from 'react';

import { Container } from './styles';

type BackgroundProps = {
  children: React.ReactNode;
};

export function Background({ children }: BackgroundProps): JSX.Element {
  return <Container>{children}</Container>;
}
