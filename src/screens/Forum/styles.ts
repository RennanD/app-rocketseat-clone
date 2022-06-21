import { Animated, Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View``;

export const SectionCard = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background_secondary};
    margin-bottom: ${theme.screen.rem(1.5)}px;
    padding: ${theme.screen.rem(1.5)}px;
  `}
`;

export const Tabs = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.screen.rem(1)}px 0;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Tab = styled.TouchableOpacity`
  /* align-items: center;
  justify-content: center;
  flex: 1; */
`;

export const TabText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.screen.rem(0.8)}px;
    color: ${theme.colors.label};
    font-family: ${theme.fonts.medium};
  `}
`;

export const ScrollIndicator = styled(Animated.View)`
  position: absolute;
  height: 4px;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  bottom: 10;
`;
