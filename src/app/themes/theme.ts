import { createTheme } from '@mui/material';
import { palette } from './palette';

export const theme = createTheme({
  palette,
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
  },
});
