import {
  Card,
  CardContent,
  Chip,
  Radio,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { tariffInfo } from '../../shared/utils/constants';

//interface TariffCardProps {}

export const TariffCard = ({ tariff }) => {
  const theme = useTheme();
  return (
    <Card
      elevation={4}
      style={{
        width: '100%',
        borderRadius: '12px',
      }}
    >
      <Stack
        flexDirection="row"
        gap="16px"
        alignItems="center"
        paddingRight="12px"
      >
        <Radio
          value={tariff.periodName}
          style={{
            padding: '0px',
            paddingLeft: '12px',
            color: theme.palette.text.brandDayDark,
          }}
        />
        <CardContent style={{ flexGrow: 1, padding: '8px 0px' }}>
          <Stack flexDirection="column">
            <Typography variant="h3">
              {tariffInfo[tariff.periodName].period}
            </Typography>
            <Typography variant="h3" component="span">
              {tariff.price_per_month} ₽
              <Typography variant="subtitle1" component="span">
                {' '}
                в месяц
              </Typography>
            </Typography>
            <Typography variant="body1">
              Оплата {tariff.price_per_period}{' '}
              {tariffInfo[tariff.periodName].frequency}
            </Typography>
          </Stack>
        </CardContent>
        {tariff.discount !== 0 && (
          <Chip variant="cashback" label={tariff.discount + '% скидка'} />
        )}
      </Stack>
    </Card>
  );
};
