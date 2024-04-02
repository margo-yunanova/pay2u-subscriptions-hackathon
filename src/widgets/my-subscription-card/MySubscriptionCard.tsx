import { Button, Card, Chip, Container, Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { TariffCardProps } from '../tariff-card/TariffCard';

export interface MySubscriptionCardProps {
  id: number;
  name: string;
  tariff: TariffCardProps;
  dueDate: string;
  logo: string;
  cashback: number;
  pay_status: string;
}

export const MySubscriptionCard: FC<MySubscriptionCardProps> = ({
  name,
  tariff,
  dueDate,
  logo,
  cashback,
  pay_status,
}) => {
  const theme = useTheme();

  return (
    <Card elevation={4} sx={{ borderRadius: '10px' }}>
      <Container
        style={{ paddingBottom: pay_status === 'false' ? '16px' : '0px' }}
      >
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          padding="16px 0px"
          gap="8px"
        >
          <CardMedia
            component="img"
            image={logo}
            alt={`Логотип ${name}`}
            sx={{
              width: '56px',
              height: '56px',
            }}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '0px',
              ':last-child': { padding: '0px' },
            }}
          >
            <Stack flexDirection="row" gap="12px" alignItems="center">
              <Typography variant="h3">{name}</Typography>
              <Chip variant="cashback" label={`${cashback} кешбэк`} />
            </Stack>
            <Stack>
              <Typography variant="body1" letterSpacing={0}>
                {/* TODO добавить месяц в правильном падеже */}
                Подписка на {tariff?.period} месяца
              </Typography>
              <Typography
                sx={{
                  fontSize: '10px',
                  color: theme.palette.text.greyDusk1,
                  fontWeight: '300',
                }}
              >
                {pay_status === 'true' ? `Списание: ${dueDate}` : 'Неактивно'}
              </Typography>
            </Stack>
          </CardContent>
        </Stack>
        {pay_status === 'false' && (
          <Button variant="outlined">Возобновить подписку</Button>
        )}
      </Container>
    </Card>
  );
};
