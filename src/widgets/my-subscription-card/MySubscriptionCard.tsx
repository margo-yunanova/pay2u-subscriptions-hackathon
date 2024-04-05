import { Button, Card, Chip, Container, Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { IMySubscription } from '../../shared/utils/type';

export const MySubscriptionCard: FC<IMySubscription> = ({
  name,
  tariff,
  due_date,
  logo,
  cashback,
  pay_status,
}) => {
  const theme = useTheme();

  return (
    <Card elevation={4} sx={{ borderRadius: '10px' }}>
      <Container style={{ paddingBottom: !pay_status ? '16px' : '0px' }}>
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
                {pay_status ? `Списание: ${due_date}` : 'Неактивно'}
              </Typography>
            </Stack>
          </CardContent>
        </Stack>
        {!pay_status && (
          <Button variant="outlined">Возобновить подписку</Button>
        )}
      </Container>
    </Card>
  );
};
