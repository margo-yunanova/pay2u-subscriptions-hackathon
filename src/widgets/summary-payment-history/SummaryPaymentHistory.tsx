import {
  Box,
  Card as CardBase,
  CardContent,
  CardProps,
  Typography,
  styled,
  useTheme,
} from '@mui/material';

const StyledSummaryPaymentHistory = styled(CardBase)<CardProps>(() => ({
  borderRadius: '12px',
}));

export const SummaryPaymentHistory = () => {
  const theme = useTheme();

  return (
    <StyledSummaryPaymentHistory elevation={4}>
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
          <Typography
            variant="h3"
            sx={{ color: theme.palette.text.brandDayDark }}
          >
            История списаний и начислений
          </Typography>
          {/* TODO добавить перенаправление на страницу с историей
          <IconButton sx={{ color: theme.palette.text.greyDusk2 }}>
            <CaretRightSm />
          </IconButton> */}
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
            <Typography variant="h3">1339 ₽</Typography>
            <Typography variant="body2" sx={{ padding: '0px' }}>
              Будет списано в марте
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h3">299 ₽</Typography>
            <Typography variant="body2" sx={{ padding: '0px' }}>
              Начислится кэшбека
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledSummaryPaymentHistory>
  );
};
