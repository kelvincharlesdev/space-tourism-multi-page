import 'styled-components';

type ColorNeutral = {
  primary: string;
  secondary: string;
  white: string;
  gray: string;
  gray100: string;
  hover: string;
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
    colors: ColorNeutral;
    fonts: {
      family: FontFamilly;
      weight: FontWeight;
      size: FontSize;
    };
  }
}
