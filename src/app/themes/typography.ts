import '@fontsource/roboto';
import { palette } from './palette';

export const typography = {
  fontFamily: 'Roboto, Raleway, Arial',
  h2: {
    fontSize: '22px',
    lineHeight: '28px',
  },
  h3: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
    fontWeight: '500',
  },
  subtitle1: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  subtitle2: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
    color: palette.text?.greyDusk1,
    fontWeight: '400',
  },
  button: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    fontWeight: '500',
  },
};
