import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { FC, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IMyTariff, ISubscription } from '../../shared/utils/type';

interface SubscriptionManagementProps {
  subscription: ISubscription;
  tariff: IMyTariff;
}

export const SubscriptionManagement: FC<SubscriptionManagementProps> = ({
  subscription,
  tariff,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();

  const listTitles = [
    { title: 'Ближайшее списание', data: tariff?.due_date },
    { title: 'Сумма списания', data: tariff.price_per_month },
    { title: 'Кешбэк', data: tariff?.cashback },
    { title: 'Счет списания', data: tariff?.payment_account },
  ];

  const changeTariff = () => {
    navigate({
      pathname: `/change-tariff/${id}`,
    });
  };

  // TODO сделать отключение подписки
  // const stopSubscription = () => {};

  return (
    <Stack flexDirection="column" gap="24px" padding="44px 16px 24px">
      <Container>
        <Card elevation={0}>
          <CardContent sx={{ padding: '0px' }}>
            <Stack flexDirection="row" gap="12px" alignItems="center">
              <CardMedia
                component="img"
                image={subscription?.logo}
                alt={`Логотип ${subscription?.name}`}
                sx={{
                  width: '44px',
                  height: '44px',
                }}
              />
              <Stack flexDirection="column" flexGrow={1}>
                <Typography variant="h3">{subscription?.name}</Typography>
                <Typography variant="body2">{subscription?.title}</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Typography variant="h3">Подписка на</Typography>
      </Container>

      <List>
        {listTitles.map(({ title, data }, id) => (
          <Fragment key={id}>
            <ListItem sx={{ paddingTop: '12px', paddingBottom: '9px' }}>
              <ListItemText
                primary={title}
                primaryTypographyProps={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  color: theme.palette.text?.greyDusk1,
                  fontWeight: '400',
                }}
              />
              <ListItemText
                primary={data}
                primaryTypographyProps={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0.25px',
                  textAlign: 'end',
                }}
              />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>

      <Container>
        <Stack flexDirection="column" gap="8px">
          <Button variant="contained" onClick={changeTariff}>
            Изменить тариф
          </Button>
          {/* TODO сделать отключение подписки
          <Button variant="outlined" onClick={stopSubscription}>
            Отключить подписку
          </Button> */}
        </Stack>
      </Container>
    </Stack>
  );
};
