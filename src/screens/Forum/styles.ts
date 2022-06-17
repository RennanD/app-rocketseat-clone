import styled, { css } from 'styled-components/native';

export const Container = styled.View``;

export const SectionCard = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
    margin-bottom: ${theme.screen.rem(1.5)}px;
    padding: ${theme.screen.rem(1.5)}px;
  `}
`;
