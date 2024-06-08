import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Collapse,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { MouseEventHandler, useLayoutEffect, useRef, useState } from 'react';

import { ChevronLeft, Heart01 } from 'react-coolicons';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  useGetSubscriptionByIdQuery,
  useGetTariffQuery,
  useSetFavoriteSubscriptionMutation,
} from '../../services/api';
import { Accordion } from '../../shared/ui/accordion';
import { SubscriptionBanner } from '../../widgets/subscription-banner/SubscriptionBanner';
import { TariffCard } from '../../widgets/tariff-card';

import { faqTariff } from './subscriptionCardPageMock';
import { SubscriptionManagement } from '../../widgets/subscription-management';
import { Drawer } from '../../shared/ui/drawer';
import { tariffInfo } from '../../shared/utils/constants';

export const SubscriptionCardPage = () => {
  const { id } = useParams();
  const { data: subscription, isLoading } = useGetSubscriptionByIdQuery(id);
  const { data: tariff, isLoading: isLoadingMyTariff } = useGetTariffQuery(id);
  const [setFavorite] = useSetFavoriteSubscriptionMutation();

  const navigate = useNavigate();
  const descriptionRef = useRef<HTMLDivElement>(null);
  const descriptionHeight = 62;

  const [fullDescription, setFullDescription] = useState(false);

  useLayoutEffect(() => {
    const scrollHeight = descriptionRef.current?.scrollHeight;
    if (scrollHeight && scrollHeight < descriptionHeight)
      setFullDescription(true);
  }, [subscription?.description]);

  const handleFullDescriptionButton: MouseEventHandler = () => {
    setFullDescription(!fullDescription);
  };

  const [tariffId, setTariffId] = useState<string>('');
  const [subscriptionManagement, setSubscriptionManagement] = useState(false);

  const handleTariffSubscription = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTariffId((event.target as HTMLInputElement).value);
  };

  const handleSubscribe = () => {
    const tariff = subscription?.tariffs.find(
      (tariff) => tariff.id === +tariffId!,
    );

    navigate('/form', {
      state: {
        subscription,
        tariff,
      },
    });
  };

  // TODO: не передаётся в текущем API
  const nextChargeDate = new Date();
  nextChargeDate.setDate(nextChargeDate.getDate() + 1);

  return (
    <>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading || isLoadingMyTariff}
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
              {subscription?.name.toUpperCase()}
            </Typography>
            <IconButton
              aria-label="Добавить подписку в Избранное"
              onClick={() =>
                setFavorite({
                  id: id!,
                  value: !subscription?.is_favorite,
                })
              }
            >
              <Heart01
                fill={`${subscription?.is_favorite ? 'black' : 'none'}`}
              />
            </IconButton>
          </Stack>
        </Container>

        {!isLoading && !isLoadingMyTariff && (
          <>
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
                        objectFit: 'contain',
                      }}
                    />
                    <Stack flexDirection="column" flexGrow={1}>
                      <Typography variant="h3">{subscription?.name}</Typography>
                      <Typography variant="body2" component="span">
                        {subscription?.title}
                      </Typography>
                    </Stack>
                    <Chip
                      variant="cashback"
                      label={`${subscription?.cashback}% кешбэк`}
                    />
                  </Stack>
                </CardContent>
                <Stack flexDirection="row" gap="8px" paddingTop="12px">
                  {subscription?.categories.map(({ name, id }) => (
                    <Chip
                      key={id}
                      variant="tag"
                      label={name}
                      onClick={() =>
                        navigate({
                          pathname: '/catalog',
                          search: `${createSearchParams({ activeTab: id.toString() })}`,
                        })
                      }
                    />
                  ))}
                </Stack>
              </Card>
            </Container>

            {tariff && (
              <Container>
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  paddingBottom="12px"
                >
                  <Typography variant="h2">Действующий тариф</Typography>
                  {/* TODO добавить страницу истории */}
                  {/* <Typography variant="link">
              <Link
                to={'/payment-history'}
                style={{
                  color: 'inherit',
                  textDecoration: 'inherit',
                }}
              >
                История
              </Link>
            </Typography> */}
                </Stack>

                <Card elevation={4} sx={{ borderRadius: '10px' }}>
                  <Container
                    style={{
                      padding: '0px',
                      paddingBottom: '6px',
                      paddingLeft: '12px',
                    }}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '8px 8px',
                      }}
                    >
                      <Typography variant="h3">
                        Подписка на {tariffInfo[tariff.period].period}
                      </Typography>
                      <Typography variant="body2">
                        {/* TODO исправить дату */}
                        {tariff?.price_per_month} ₽ спишется{' '}
                        {nextChargeDate.toLocaleDateString('ru')}
                      </Typography>
                    </CardContent>

                    <Button
                      variant="text"
                      onClick={() => setSubscriptionManagement(true)}
                    >
                      Управлять
                    </Button>
                  </Container>
                </Card>
              </Container>
            )}

            <div>
              <Container>
                <Typography variant="h2">О сервисе</Typography>
              </Container>

              <Container
                style={{
                  padding: '0px',
                  paddingTop: '12px',
                  marginTop: '-10px',
                }}
              >
                {/* TODO добавить паддинг справа */}
                <Swiper
                  slidesPerView="auto"
                  spaceBetween={7}
                  style={{
                    padding: '10px 16px',
                  }}
                >
                  {subscription?.banners.map(({ image, id }) => (
                    <SwiperSlide key={id} style={{ width: 'auto' }}>
                      <SubscriptionBanner image={image} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Container>

              <Container>
                <Collapse
                  in={fullDescription}
                  collapsedSize={`${descriptionHeight}px`}
                >
                  <Typography
                    variant="subtitle1"
                    ref={descriptionRef}
                    component="span"
                  >
                    {subscription?.description}
                  </Typography>
                </Collapse>

                {!fullDescription && (
                  <Button
                    onClick={handleFullDescriptionButton}
                    style={{ padding: '0px' }}
                  >
                    Развернуть описание
                  </Button>
                )}
              </Container>
            </div>

            {!tariff && (
              <Container>
                <Typography variant="h2">Тарифы</Typography>

                <FormControl style={{ width: '100%' }}>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={tariffId}
                    onChange={handleTariffSubscription}
                    style={{ width: '100%', gap: '8px' }}
                  >
                    {subscription?.tariffs.map((tariff) => (
                      <FormControlLabel
                        key={tariff.id}
                        control={<TariffCard {...tariff} />}
                        label=""
                        style={{
                          margin: '0px',
                          border: 'solid 2px',
                          borderColor:
                            tariffId === tariff.id.toString()
                              ? '#8EB2EC'
                              : 'transparent',
                          borderRadius: '12px',
                        }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Container>
            )}

            <Container>
              <Stack flexDirection="column">
                <Typography variant="h2">Что нужно знать</Typography>
                <Container style={{ padding: '0px' }}>
                  {faqTariff.map((item, id) => (
                    <Accordion key={id} {...item} id={`${id}`} />
                  ))}
                </Container>
              </Stack>
            </Container>

            {!tariff && (
              <Container style={{ paddingBottom: '24px' }}>
                <Button
                  onClick={handleSubscribe}
                  variant="contained"
                  disabled={tariffId === undefined}
                >
                  Оформить подписку
                </Button>
              </Container>
            )}

            {tariff && (
              <Drawer
                open={subscriptionManagement}
                setOpen={setSubscriptionManagement}
              >
                <SubscriptionManagement
                  subscription={subscription!}
                  tariff={tariff}
                />
              </Drawer>
            )}
          </>
        )}
      </Stack>
    </>
  );
};
