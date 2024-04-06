import { createTheme } from '@mui/material';
import { typography } from './typography';
import type { Palette } from './type';
import { palette } from './palette';
import { redPalette } from './redPalette';

export const theme = (palette: Partial<Palette>) =>
  createTheme({
    palette,
    typography,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            '&.Mui-disabled': {
              opacity: '0.6',
            },
          },
          contained: {
            width: '100%',
            backgroundColor: palette.background?.brandDay1,
            color: palette.text?.baseWhite,
            borderRadius: '8px',
            paddingTop: '8px',
            paddingBottom: '8px',
            '&:active': {
              backgroundColor: palette.background?.brandDayDark,
              color: palette.text?.baseWhite,
            },
            ':hover': {
              backgroundColor: palette.background?.brandDay1,
              color: palette.text?.baseWhite,
            },
            '@media (hover: hover)': {
              ':hover': { backgroundColor: palette.background?.brandDay2 },
            },
            '&.Mui-disabled': {
              backgroundColor: palette.background?.brandDay1,
              color: palette.text?.baseWhite,
            },
          },
          outlined: {
            width: '100%',
            backgroundColor: 'transparent',
            color: palette.text?.brandDay1,
            borderColor: palette.text?.brandDay1,
            borderRadius: '8px',
            paddingTop: '8px',
            paddingBottom: '8px',
            '&:active': {
              backgroundColor: palette.background?.brandDayDark,
              color: palette.text?.baseWhite,
            },
            ':hover': {
              backgroundColor: palette.background?.brandDay1,
              color: palette.text?.baseWhite,
            },
            '&.Mui-disabled': {
              backgroundColor: 'transparent',
              color: palette.text?.brandDay1,
              borderColor: palette.text?.brandDay1,
            },
          },
          text: {
            color: palette.text?.brandDay1,
            borderColor: 'transparent',
            '&:active': {
              color: palette.text?.brandDayDark,
            },
            ':hover': {
              backgroundColor: 'transparent',
              border: 'none',
            },
            '@media (hover: hover)': {
              ':hover': {
                color: palette.text?.brandDay2,
                border: '1px solid',
                borderColor: palette.text?.brandDay4,
              },
            },
            '&.Mui-disabled': {
              color: palette.text?.brandDay1,
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
      MuiChip: {
        styleOverrides: {
          root: {
            maxWidth: '110px',
            borderRadius: '30px',
            padding: '8px 12px',
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0',
            '& .MuiChip-label': {
              overflow: 'visible',
              padding: '0px 0px',
            },
          },
        },
        variants: [
          {
            props: { variant: 'cashback' },
            style: {
              backgroundColor: palette.background?.accent,
              color: palette.text?.accentDeepDark,
            },
          },
          {
            props: { variant: 'tag' },
            style: {
              backgroundColor: palette.background?.accent,
              color: palette.text?.accentDeepDark,
              border: 'solid 1px #0065B0',
            },
          },
        ],
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            position: 'initial',
            color: '#6B7A99',
            fontSize: '21px',
            lineHeight: '32px',
            fontWeight: 500,
            letterSpacing: '0.2px',
            '&.Mui-focused': {
              color: '#6B7A99',
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-input': {
              border: '2px solid',
              borderColor: 'transparent',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              fontSize: '16px',
              color: palette.text?.greyDusk1,
              padding: '10px 16px',
              boxShadow:
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
              '&:focus': {
                borderColor: palette.text?.brandDay1,
              },
              '&:invalid': {
                boxShadow:
                  '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
              },
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#2953FC',
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#2953FC',
            },
            '& .MuiSwitch-track': {
              backgroundColor: '#D3D8E6',
              opacity: 1,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            '&:before': {
              border: 'none',
            },
            '&:hover:before': {
              border: 'none !important',
            },
            '& .MuiSelect-select': {
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
              alignItems: 'center',
            },
            '&:after': {
              border: 'none',
            },
            '&:hover:after': {
              border: 'none !important',
            },
          },
        },
      },
    },
  });

export const themes = { default: theme(palette), red: theme(redPalette) };
