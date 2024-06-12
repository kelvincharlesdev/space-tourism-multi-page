import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0B0D17',
    secondary: '#D0D6F9',
    white: '#ffffff'
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
      lg: '1.75rem', //28px
      xl: '2rem', //32px
      xxl: '3.625rem', //58px
      giant: '6.25rem', //100px
      huge: '9rem' //144px
    }
  }
};
