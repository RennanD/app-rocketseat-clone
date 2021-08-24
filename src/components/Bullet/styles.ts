import styled, { css } from 'styled-components/native';

type BulletProps = {
  selected: boolean;
};

export const Container = styled.View<BulletProps>`
  margin: 0 5px;

  ${({ theme }) => css`
    background-color: ${theme.colors.bullet};
    height: ${theme.screen.rem(0.3)}px;
    width: ${theme.screen.rem(0.7)}px;
    border-radius: ${theme.screen.rem(0.1)}px;
  `}

  ${({ theme, selected }) =>
    selected &&
    css`
      width: 40px;
      background-color: ${theme.colors.secondary};
    `}
`;
