import {
  Box,
  Card as CardBase,
  CardContent,
  CardProps,
  IconButton,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { CaretRightSm } from 'react-coolicons';

const StyledSummaryPaymentHistory = styled(CardBase)<CardProps>(() => ({
  borderRadius: '12px',
}));

interface SummaryPaymentHistoryProps {}

export const SummaryPaymentHistory: FC<SummaryPaymentHistoryProps> = () => {
  const theme = useTheme();

  return (
    <StyledSummaryPaymentHistory elevation={10}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ color: theme.palette.text.brandDayDark }}>
            История списаний и начислений
          </Typography>
          <IconButton
            sx={{ padding: '0px', color: theme.palette.text.greyDusk2 }}
          >
            <CaretRightSm />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography>1339 ₽</Typography>
            <Typography
              sx={{ padding: '0px', color: theme.palette.text.greyDusk1 }}
            >
              Будет списано в марте
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography>299 ₽</Typography>
            <Typography
              sx={{ padding: '0px', color: theme.palette.text.greyDusk1 }}
            >
              Начислится кэшбека
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledSummaryPaymentHistory>
  );
};