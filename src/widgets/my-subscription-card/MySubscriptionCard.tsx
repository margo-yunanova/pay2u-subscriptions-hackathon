import { Button, Card, Chip, Container, Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import image from '../../assets/ivi.png';

export interface MySubscriptionCardProps {
  title?: string;
  period?: string;
  dueDate?: string;
  logo?: string;
}

export const MySubscriptionCard: FC<MySubscriptionCardProps> = ({
  title = 'IVI',
  period = '3',
  dueDate = '11.06.2024',
  logo = image,
}) => {
  const theme = useTheme();

  return (
    <Card elevation={4} sx={{ borderRadius: '10px' }}>
      <Container style={{ paddingBottom: '16px' }}>
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          padding="16px 0px"
          gap="8px"
        >
          <CardMedia
            component="img"
            image={logo}
            alt={`Логотип ${title}`}
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
              <Typography variant="h3">{title}</Typography>
              <Chip variant="cashback" label="15% кешбэк" />
            </Stack>
            <Stack>
              <Typography variant="body1" letterSpacing={0}>
                Подписка на {period} месяца
              </Typography>
              <Typography
                sx={{
                  fontSize: '10px',
                  color: theme.palette.text.greyDusk1,
                  fontWeight: '300',
                }}
              >
                Списание: {dueDate} / Неактивно
              </Typography>
            </Stack>
          </CardContent>
        </Stack>
        <Button variant="outlined">Возобновить подписку</Button>
      </Container>
    </Card>
  );
};
