import styled, { css } from 'styled-components/native';

type BulletProps = {
  selected: boolean;
};

export const Container = styled.View<BulletProps>`
  height: 5px;
  width: 10px;
  border-radius: 2px;
  margin: 0 5px;

  background-color: ${({ theme }) => theme.colors.bullet};

  ${({ theme, selected }) =>
    selected &&
    css`
      width: 40px;
      background-color: ${theme.colors.secondary};
    `}
`;
