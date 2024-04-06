import { Button, Card, Chip, Container, Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { IMySubscription } from '../../shared/utils/type';
import { tariffInfo } from '../../shared/utils/constants';

export const MySubscriptionCard: FC<IMySubscription> = ({
  name,
  tariff,
  due_date,
  logo,
  cashback,
  pay_status,
}) => {
  const theme = useTheme();

  const date = new Date(due_date).toLocaleDateString('ru');

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
              <Chip variant="cashback" label={`${cashback}% кешбэк`} />
            </Stack>
            <Stack>
              <Typography variant="body1" letterSpacing={0}>
                Подписка на {tariffInfo[tariff.period].period}
              </Typography>
              {(!pay_status || due_date) && (
                <Typography
                  sx={{
                    fontSize: '10px',
                    color: theme.palette.text.greyDusk1,
                    fontWeight: '300',
                  }}
                >
                  {pay_status ? `Списание: ${date}` : 'Неактивно'}
                </Typography>
              )}
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
