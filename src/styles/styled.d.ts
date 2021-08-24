import 'styled-components';
import type { ResponsiveTheme } from './ThemProvider';
import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ResponsiveTheme, ThemeType {}
}
