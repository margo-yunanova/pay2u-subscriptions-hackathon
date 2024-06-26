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
import { ITariff } from '../../shared/utils/type';

export const TariffCard: FC<ITariff> = ({
  id,
  discount,
  price_per_month,
  price_per_period,
  period,
}) => {
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
          value={id}
          style={{
            padding: '0px',
            paddingLeft: '12px',
            color: theme.palette.text.brandDayDark,
          }}
        />
        <CardContent style={{ flexGrow: 1, padding: '8px 0px' }}>
          <Stack flexDirection="column">
            <Typography variant="h3">{tariffInfo[period].period}</Typography>
            <Typography variant="h3" component="span">
              {price_per_month} ₽
              <Typography variant="subtitle1" component="span">
                {' '}
                в месяц
              </Typography>
            </Typography>
            <Typography variant="body1">
              Оплата {price_per_period} ₽ {tariffInfo[period].frequency}
            </Typography>
          </Stack>
        </CardContent>
        {discount !== 0 && (
          <Chip variant="cashback" label={discount + '% скидка'} />
        )}
      </Stack>
    </Card>
  );
};
