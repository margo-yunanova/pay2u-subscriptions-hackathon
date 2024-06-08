import {
  Backdrop,
  CircularProgress,
  Stack,
  Container,
  IconButton,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ChevronLeft } from 'react-coolicons';
import { useGetSubscriptionsQuery } from '../../services/api';
import noSubscription from '../../assets/noSubscription.svg';
import { CatalogCard } from '../../widgets/catalog-card';

const NoFavorites = () => {
  const navigate = useNavigate();
  return (
    <Card elevation={0}>
      <Stack flexDirection="column" alignItems="center" maxWidth="248px">
        <CardMedia
          component="img"
          image={noSubscription}
          sx={{
            width: '146px',
            height: '103px',
          }}
        />
        <CardContent>
          <Typography variant="h3" textAlign="center">
            В Избранном пока пусто{' '}
          </Typography>
          <Typography variant="subtitle2" textAlign="center" component="span">
            Сюда можно сохранять понравившиеся сервисы, чтобы не потерять
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          sx={{ width: 'auto' }}
          onClick={() => navigate('/catalog')}
          aria-label="Перейти в каталог"
        >
          В каталог
        </Button>
      </Stack>
    </Card>
  );
};

export const FavoriteSubscriptionsPage = () => {
  const navigate = useNavigate();

  const { data: subscriptions, isLoading } = useGetSubscriptionsQuery({
    is_favorite: true,
  });

  return (
    <>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress />
      </Backdrop>

      <Stack flexDirection="column" gap="24px">
        <Container>
          <Stack flexDirection="row" alignItems="center">
            <IconButton aria-label="Назад" onClick={() => navigate(-1)}>
              <ChevronLeft />
            </IconButton>
            <Typography
              style={{ flexGrow: '1', justifyContent: 'flex-start' }}
              variant="h3"
            >
              Избранное
            </Typography>
          </Stack>
        </Container>
        {!isLoading && (
          <Container>
            <Stack flexDirection="column" gap="12px">
              {subscriptions?.length ? (
                subscriptions.map((card, id) => (
                  <CatalogCard key={id} {...card} />
                ))
              ) : (
                <Container style={{ width: 'auto' }}>
                  <NoFavorites />
                </Container>
              )}
            </Stack>
          </Container>
        )}{' '}
      </Stack>
    </>
  );
};
