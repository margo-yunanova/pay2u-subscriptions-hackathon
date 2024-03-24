import { createTheme } from '@mui/material';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: palette.background?.brandDay1,
          color: palette.text?.baseWhite,
          ':hover': { backgroundColor: palette.background?.brandDay2 },
          ':disabled': {
            backgroundColor: palette.background?.brandDay1,
            color: palette.text?.baseWhite,
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          color: palette.text?.brandDay1,
          borderColor: palette.text?.brandDay1,
          ':hover': {
            backgroundColor: palette.background?.brandDay1,
            color: palette.text?.baseWhite,
          },
          ':disabled': {
            backgroundColor: 'transparent',
            color: palette.text?.brandDay1,
            borderColor: palette.text?.brandDay1,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '0px',
          color: palette.text?.primary,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '0.15px',
          fontWeight: '500',
          color: palette.text?.primary,
          textTransform: 'none',
          borderBottom: 'solid 1px',
          borderColor: 'rgba(24, 20, 31, 0.15)',
          '&.Mui-selected': {
            color: palette.text?.brandDay1,
            borderBottomColor: palette.text?.brandDay1,
            borderBottom: 'solid 2px',
            borderColor: palette.text?.brandDay1,
          },
        },
      },
    },
  },
});
