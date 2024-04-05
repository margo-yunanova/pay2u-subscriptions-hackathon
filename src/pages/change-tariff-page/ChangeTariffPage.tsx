import { useNavigate, useParams } from 'react-router-dom';
import {
  useChangeTariffMutation,
  useGetSubscriptionByIdQuery,
  useGetTariffQuery,
  useGetTariffsQuery,
} from '../../services/api';
import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { TariffCard } from '../../widgets/tariff-card';
// @ts-expect-error: не работают типы в используемой библиотеке
import { ChevronLeft, ArrowDownUp } from 'react-coolicons';
import { useEffect, useState } from 'react';

export const ChangeTariffPage = () => {
  const { id: subscriptionId } = useParams();
  const navigate = useNavigate();
  const { data: subscription, isLoading } =
    useGetSubscriptionByIdQuery(subscriptionId);
  const { data: tariff, isLoading: isLoadingMyTariff } =
    useGetTariffQuery(subscriptionId);
  const { data, isLoading: isLoadingMyTariffs } =
    useGetTariffsQuery(subscriptionId);
  const [tariffId, setTariffId] = useState<string>(tariff?.id ?? '');

  const [changeTariff, { isLoading: isLoadingChangeTariff }] =
    useChangeTariffMutation();

  const tariffs = data?.filter((item) => item.id !== tariff?.id);

  useEffect(() => {
    if (tariff) {
      setTariffId(tariff.id);
    }
  }, [tariff]);

  const handleTariffSubscription = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTariffId((event.target as HTMLInputElement).value);
  };

  const handleChangeTariff = async () => {
    try {
      await changeTariff({
        subscriptionId: subscriptionId!,
        tariffId: tariffId!,
      });
    } catch (e) {
      console.log(e);
    }
  };

  console.log(tariffId, tariff?.id);
  return (
    <Stack flexDirection="column" gap="24px">
      <Container>
        <Stack flexDirection="row" alignItems="center">
          <IconButton onClick={() => navigate(-1)}>
            <ChevronLeft />
          </IconButton>
          <Typography
            style={{ flexGrow: '1', justifyContent: 'flex-start' }}
            variant="h3"
          >
            Выбор тарифа
          </Typography>
        </Stack>
      </Container>

      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoadingMyTariff || isLoading || isLoadingMyTariffs}
      >
        <CircularProgress />
      </Backdrop>
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
                <Typography variant="body2">
                  {subscription?.subtitle}
                </Typography>
              </Stack>
              <Chip
                variant="cashback"
                label={`${subscription?.cashback}% кешбэк`}
              />
            </Stack>
          </CardContent>
        </Card>
      </Container>

      <Container>
        <FormControl style={{ width: '100%' }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={tariffId}
            onChange={handleTariffSubscription}
            style={{ width: '100%', gap: '8px' }}
          >
            <Typography variant="h2" sx={{ paddingBottom: '12px' }}>
              Активная подписка
            </Typography>

            {tariff && (
              <FormControlLabel
                key={tariff?.id}
                control={<TariffCard {...tariff} />}
                label=""
                style={{
                  margin: '0px',
                  border: 'solid 2px',
                  borderColor:
                    tariffId === tariff?.periodName ? '#8EB2EC' : 'transparent',
                  borderRadius: '12px',
                }}
              />
            )}

            <Container sx={{ padding: '0px 13px', width: 'auto' }}>
              <ArrowDownUp />
            </Container>

            <Typography variant="h2" sx={{ paddingBottom: '12px' }}>
              Выбрать новый тариф
            </Typography>

            {tariffs?.map((tariff) => (
              <FormControlLabel
                key={tariff.id}
                control={<TariffCard {...tariff} />}
                label=""
                style={{
                  margin: '0px',
                  border: 'solid 2px',
                  borderColor:
                    tariffId === tariff.periodName ? '#8EB2EC' : 'transparent',
                  borderRadius: '12px',
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Container>

      <Container>
        <Stack flexDirection="column" gap="8px">
          <Button
            variant="contained"
            onClick={handleChangeTariff}
            disabled={isLoadingChangeTariff || +tariffId === tariff?.id}
          >
            Изменить тариф
          </Button>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Оставить текущий тариф
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};
