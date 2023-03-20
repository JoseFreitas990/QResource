import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#FF8718',
  lightPrimary: '#F8A509', //
  secondary: '#2C2C2C', // Gray
  yellow: '#F8B301',
  orange: '#CE4A00',
  white: '#fff',
  white1: '#F1E6D8',
  red: '#FF6B43',
  black: '#000000',
  darkGray: '#23292B',
  gray: '#6E6E6E',
  lightGray: '#CDD0D7',

  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.4)',
  transparent: 'transparent',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: { fontFamily: 'Roboto-Black', fontSize: SIZES.largeTitle },
  h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const darkTheme = {
  name: 'dark',
  backgroundColor: COLORS.secondary,
  textColor: COLORS.white,
  tabBackgroundColor: COLORS.lightGray,
  cardBackgroundColor: COLORS.gray,
  bottomTabBarBackgroundColor: COLORS.gray,
  headerColor: COLORS.primary,
};

export const lightTheme = {
  name: 'light',
  backgroundColor: COLORS.white,
  textColor: COLORS.black,
  tabBackgroundColor: COLORS.white,
  cardBackgroundColor: COLORS.white,
  bottomTabBarBackgroundColor: COLORS.white,
  headerColor: COLORS.primary,
};

export const selectedTheme = darkTheme;

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;
