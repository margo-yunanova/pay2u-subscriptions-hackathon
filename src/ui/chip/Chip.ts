import { Chip as ChipBase, styled, ChipProps } from '@mui/material';

export const Chip = styled(ChipBase)<ChipProps>(({ theme }) => ({
  maxWidth: '110px',
  borderRadius: '30px',
  padding: '8px 12px',
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '0',
  backgroundColor: theme.palette.background.accent,
  color: theme.palette.text.accentDeepDark,
  '& .MuiChip-label': {
    overflow: 'visible',
    padding: '0px 0px',
  },
}));
