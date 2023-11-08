import {createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  greyscale900: '#000000',
  greyscale800: 'rgba(0, 0, 0, 0.9)',
  greyscale600: '#2d2d2d',
  greyscale500: 'rgba(0, 0, 0, 0.7)',
  greyscale400: 'rgba(0, 0, 0, 0.33)',
  greyscale300: 'rgba(0, 0, 0, 0.15)',
  greyscale200: 'rgba(0, 0, 0, 0.07)',
  greyscale100: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    text: palette.greyscale600,
    textMuted: palette.greyscale500,
    mainBackground: palette.greyscale100,
    mainBackgroundDarker: palette.greyscale500,
    cardPrimaryBackground: palette.purplePrimary,
    cardPrimaryText: palette.greyscale100,
    icon: palette.greenDark,
    iconDark: palette.greyscale500,
    divider: palette.greyscale300,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 600,
      fontSize: 20,
    },
    subtitle: {
      fontSize: 18,
      lineHeight: 26,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {},
  },
});

export type Theme = typeof theme;
