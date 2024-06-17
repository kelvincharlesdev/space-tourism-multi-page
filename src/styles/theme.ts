import { DefaultTheme } from 'styled-components';

const solids = {
  white: '#ffffff',
  gray: '#85868b',
  gray100: '#363941'
};

export const theme: DefaultTheme = {
  ...solids,
  colors: {
    primary: '#0B0D17',
    secondary: '#D0D6F9',
    white: solids.white,
    gray: solids.gray,
    gray100: solids.gray100,
    hover: 'rgba(255, 255, 255, 0.1)'
  },
  fonts: {
    family: {
      primary: 'Bellefair, sans-serif',
      secondary: 'Barlow, sans-serif',
      tertiary: 'Barlow Condensed, sans-serif'
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    size: {
      xs: '0.875rem', //14px
      sm: '1rem', //16px
      md: '1.125rem', //18px
      medium: '1.25rem', //20px
      lg: '1.5rem', //24px
      large: '1.75rem', //28px
      xl: '2rem', //32px
      xxl: '2.5rem', //40px
      xxxl: '3.5rem', //56px
      giant: '5rem', //80px
      xgiant: '6rem', //96px
      huge: '9rem' //144px
    }
  }
};
