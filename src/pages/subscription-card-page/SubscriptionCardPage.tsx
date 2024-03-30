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
import { ChevronLeft, Heart01 } from 'react-coolicons';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Accordion } from '../../shared/ui/accordion';
import { SubscriptionBanner } from '../../widgets/subscription-banner/SubscriptionBanner';
import { TariffCard } from '../../widgets/tariff-card';
import { services } from '../catalog-page/catalogMock';
import { faqTariff } from './subscriptionCardPageMock';

//interface SubscriptionCardPageProps {}

export const SubscriptionCardPage = ({ service }) => {
  console.log(service);

  const { title } = useParams();
  const navigate = useNavigate();
  const descriptionRef = useRef<HTMLDivElement>(null);
  const descriptionHeight = 62;

  const card = services.find(
    (item) => item.name.toLowerCase() === title!.toLocaleLowerCase(),
  )!;

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
            {title?.toUpperCase()}
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
                image={card.logo}
                alt={`Логотип ${title}`}
                sx={{
                  width: '44px',
                  height: '44px',
                }}
              />
              <Stack flexDirection="column" flexGrow={1}>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="body2">{card.description}</Typography>
              </Stack>
              <Chip variant="cashback" label={`${card.cashback}% кешбэк`} />
            </Stack>
          </CardContent>
          <Stack flexDirection="row" gap="8px" paddingTop="12px">
            {card.type.map((tag) => (
              <Chip
                variant="tag"
                label={tag}
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
            {service.banner.map((src) => (
              <SwiperSlide style={{ width: 'auto' }}>
                <SubscriptionBanner image={src} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>

        <Container>
          <Collapse
            in={fullDescription}
            collapsedSize={`${descriptionHeight}px`}
          >
            <Typography variant="subtitle1">{card.info}</Typography>
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
            {services[8].tariffs?.map((tariff) => (
              <FormControlLabel
                value={tariff.periodName}
                control={<TariffCard tariff={tariff} />}
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
