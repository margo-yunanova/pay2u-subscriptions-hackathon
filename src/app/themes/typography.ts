import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { palette } from './palette';
import { TypographyVariantsOptions } from '@mui/material';

export const typography: TypographyVariantsOptions = {
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
  h4: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
    fontWeight: '400',
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
  body1: {
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.25px',
    fontWeight: '400',
  },
  body2: {
    fontSize: '12px',
    lineHeight: '16px',
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
  link: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
    fontWeight: '400',
    color: '#2A3CE0',
  },
};
