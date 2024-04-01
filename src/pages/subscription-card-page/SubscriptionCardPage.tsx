import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
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
// @ts-expect-error: не работают типы в используемой библиотеке
import { ChevronLeft, Heart01 } from 'react-coolicons';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetSubscriptionByIdQuery } from '../../services/api';
import { Accordion } from '../../shared/ui/accordion';
import { SubscriptionBanner } from '../../widgets/subscription-banner/SubscriptionBanner';
import { TariffCard } from '../../widgets/tariff-card';
import { TariffCardProps } from '../../widgets/tariff-card/TariffCard';
import { CategoryProps } from '../catalog-page/CatalogPage';
import { faqTariff } from './subscriptionCardPageMock';

export interface SubscriptionCardPageProps {
  id: number;
  name: string;
  cashback: number;
  logo: string;
  min_price: number;
  categories: CategoryProps[];
  description: string;
  banners: { id: number; image: string }[];
  subtitle: string;
  tariffs: TariffCardProps[];
  is_favorite: boolean;
}

export const SubscriptionCardPage = () => {
  const { id } = useParams();
  const { data: subscription } = useGetSubscriptionByIdQuery(id);
  const navigate = useNavigate();
  const descriptionRef = useRef<HTMLDivElement>(null);
  const descriptionHeight = 62;

  const [fullDescription, setFullDescription] = useState(false);

  // TODO добавить зависимости
  useLayoutEffect(() => {
    const scrollHeight = descriptionRef.current?.scrollHeight;

    if (scrollHeight && scrollHeight < descriptionHeight)
      setFullDescription(true);
  });

  const handleFullDescriptionButton: MouseEventHandler = () => {
    setFullDescription(!fullDescription);
  };

  const [period, setPeriod] = useState('monthly');

  const handleTariffCard = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod((event.target as HTMLInputElement).value);
  };

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
            {subscription?.name.toUpperCase()}
          </Typography>
          <IconButton>
            <Heart01 />
          </IconButton>
        </Stack>
      </Container>

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
          <Stack flexDirection="row" gap="8px" paddingTop="12px">
            {subscription?.categories.map(({ name, id }) => (
              <Chip
                key={id}
                variant="tag"
                label={name}
                // TODO Переходить на страницу каталога
                onClick={() => navigate(`/catalog`)}
              />
            ))}
          </Stack>
        </Card>
      </Container>

      <div>
        <Container>
          <Typography variant="h2">О сервисе</Typography>
        </Container>

        <Container
          style={{ padding: '0px', paddingTop: '12px', marginTop: '-10px' }}
        >
          {/* TODO добавить паддинг справа */}
          <Swiper
            slidesPerView="auto"
            spaceBetween={7}
            style={{
              paddingLeft: '16px',
              paddingBottom: '10px',
              paddingTop: '10px',
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
            <Typography variant="subtitle1" ref={descriptionRef}>
              {subscription?.description}
            </Typography>
          </Collapse>
          {/* TODO проверить почему не скрывается кнопка */}
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

      <Container>
        <Typography variant="h2">Тарифы</Typography>

        <FormControl style={{ width: '100%' }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={period}
            onChange={handleTariffCard}
            style={{ width: '100%', gap: '8px' }}
          >
            {subscription?.tariffs.map((tariff) => (
              <FormControlLabel
                key={tariff.id}
                value={tariff.periodName}
                control={<TariffCard {...tariff} />}
                label=""
                style={{
                  margin: '0px',
                  border: 'solid 2px',
                  borderColor:
                    period === tariff.periodName ? '#8EB2EC' : 'transparent',
                  borderRadius: '12px',
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Container>

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

      <Container style={{ paddingBottom: '24px' }}>
        <Button onClick={() => navigate('/form')} variant="contained">
          Оформить подписку
        </Button>
      </Container>
    </Stack>
  );
};
