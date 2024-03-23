import { Button as ButtonBase, styled, ButtonProps } from '@mui/material';

export const Button = styled(ButtonBase, {
  overridesResolver: (props, styles) => [
    styles.root,
    props.variant === 'contained' && styles.contained,
    props.variant === 'outlined' && styles.outlined,
  ],
})<ButtonProps>(({ theme }) => ({
  width: '100%',
  textTransform: 'none',
  borderRadius: '8px',
  paddingTop: '8px',
  paddingBottom: '8px',
  fontSize: '16px',
  letterSpacing: '0.15px',
  '&:active': {
    backgroundColor: theme.palette.background.brandDayDark,
    color: theme.palette.text.baseWhite,
  },
  '&.Mui-disabled': {
    opacity: '0.6',
  },
}));
