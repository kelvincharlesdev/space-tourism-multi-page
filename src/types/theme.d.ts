import 'styled-components';

type ColorNeutral = {
  lightest: string;
  light: string;
  medium: string;
};

type ColorMain = {
  primary: string;
  secondary: string;
};
type ColorHover = {
  dark: string;
};

type FontWeight = {
  light: number;
  regular: number;
  medium: number;
  bold: number;
};

type FontSize = {
  xs: string;
  sm: string;
  md: string;
  medium: string;
  lg: string;
  large: string;
  xl: string;
  xxl: string;
  xxxl: string;
  giant: string;
  xgiant: string;
  huge: string;
};

type FontFamilly = {
  primary: string;
  secondary: string;
  tertiary: string;
};

type ColorGradient = {
  colorGradientPrimary: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: ColorMain;
      neutral: ColorNeutral;
      hover: ColorHover;
    };
    fonts: {
      family: FontFamilly;
      weight: FontWeight;
      size: FontSize;
    };
  }
}
