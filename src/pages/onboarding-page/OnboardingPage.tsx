import {
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { MouseEventHandler, useLayoutEffect, useRef, useState } from 'react';
import { CloseMd } from 'react-coolicons';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import onboardingFirst from '../../assets/onbording1.svg';
import onboardingSecond from '../../assets/onbording2.svg';

const content = [
  {
    title: 'Управляйте подписками в одном приложении',
    image: onboardingFirst,
    subtitle:
      'Подписывайтесь, меняйте тарифы и отключайте подписки в два клика',
    button: 'А что ещё?',
  },
  {
    title: 'Получайте кешбэк до 30% с каждой оплаты',
    image: onboardingSecond,
    subtitle:
      'Покупайте подписки выгоднои добавляйте уже имеющиеся подписки за кешбэк',
    button: 'Смотреть сервисы',
  },
];

export const OnboardingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const swiperRef = useRef<SwiperType>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const handleClick: MouseEventHandler = () => {
    if (activeSlide === content.length - 1) {
      navigate('/home', { replace: true });
    } else {
      swiperRef.current?.slideNext();
    }
  };

  useLayoutEffect(() => {
    setClientHeight(document.documentElement.clientHeight);
  }, []);

  return (
    <div
      style={{
        minHeight: `calc(${clientHeight}px - var(--root-padding-top))`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container>
        <Stack flexDirection="row" justifyContent="flex-end">
          <IconButton
            aria-label="Назад"
            onClick={() => navigate('/home', { replace: true })}
          >
            <CloseMd />
          </IconButton>
        </Stack>
      </Container>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
        }}
        style={{ width: '100%', flexGrow: 1 }}
      >
        {content.map(({ title, subtitle, image }, idx) => (
          <SwiperSlide key={idx}>
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Typography
                variant="h2"
                textAlign="center"
                sx={{ maxWidth: '328px' }}
              >
                {title}
              </Typography>
              <img src={image} style={{ width: 'auto' }} />
              <Typography
                variant="h4"
                textAlign="center"
                component="span"
                sx={{
                  paddingBottom: '30px',
                  color: theme.palette.text.greyDusk1,
                  maxWidth: '328px',
                }}
              >
                {subtitle}
              </Typography>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>

      <Container sx={{ marginBottom: '24px', marginTop: '16px' }}>
        <Button
          variant="contained"
          onClick={handleClick}
          aria-label={
            activeSlide === content.length - 1
              ? 'Перейти на домашнюю страницу'
              : 'Перейти на следующую страницу Онбординга'
          }
        >
          {content[activeSlide].button}
        </Button>
      </Container>
    </div>
  );
};
