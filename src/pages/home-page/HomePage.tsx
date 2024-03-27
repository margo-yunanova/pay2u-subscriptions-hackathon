import { Chip, Container, IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Bell, ChevronLeft } from 'react-coolicons';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import heart from '../../assets/heart.svg';
import { Accordion } from '../../shared/ui/accordion';
import { NonModalDialog } from '../../shared/ui/non-modal-dialog';
import { MainCard } from '../../widgets/main-card';
import { MySubscriptionSwiperCard } from '../../widgets/my-subscription-swiper-card';
import { MySubscriptionSwiperCardProps } from '../../widgets/my-subscription-swiper-card/MySubscriptionSwiperCard';
import { PopularSubscription } from '../../widgets/popular-subscription';
import { PopularSubscriptionProps } from '../../widgets/popular-subscription/PopularSubscription';
import { SummaryPaymentHistory } from '../../widgets/summary-payment-history';
import { catalog, faq } from './homeMock';

interface HomePageProps {
  popularSubscriptions: PopularSubscriptionProps[];
  mySubscriptionsCard: MySubscriptionSwiperCardProps[];
}

export const HomePage: FC<HomePageProps> = ({
  popularSubscriptions,
  mySubscriptionsCard,
}) => {
  return (
    <Stack flexDirection="column" gap="24px">
      <Container>
        <Stack flexDirection="row" alignItems="center">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <Typography variant="h3">Управления подписками</Typography>
          <IconButton style={{ flexGrow: '1', justifyContent: 'flex-end' }}>
            <Bell />
          </IconButton>
        </Stack>
      </Container>

      <Container>
        <Stack flexDirection="column" gap="12px">
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="h2">Мои подписки</Typography>
            <Chip variant="cashback" label="Кешбэк до 30%" />
          </Stack>
          <NonModalDialog
            title="Уже есть подписки?"
            description="Добавьте их и получайте кешбэк до 30% с каждой оплаты в приложении"
            buttonName="Добавить мои подписки"
          />
          <NonModalDialog
            title="У вас пока нет подписок"
            description="Купите подписку и получайте кешбэк до 30% с каждой оплаты в приложении "
            buttonName="В каталог"
          />
          <SummaryPaymentHistory />
        </Stack>
      </Container>

      <Stack flexDirection="column" marginBottom="-10px">
        <Container>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="h2">Мои подписки</Typography>
            <Typography variant="link">Все мои подписки</Typography>
          </Stack>
        </Container>
        <Container
          style={{ padding: '0px', paddingTop: '12px', marginTop: '-10px' }}
        >
          <Swiper
            slidesPerView="auto"
            spaceBetween={7}
            style={{
              paddingLeft: '16px',
              paddingBottom: '10px',
              paddingTop: '10px',
            }}
          >
            {mySubscriptionsCard.map((item) => (
              <SwiperSlide style={{ width: 'auto' }}>
                <MySubscriptionSwiperCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Stack>

      <Stack flexDirection="column" gap="12px">
        <Container>
          <Typography variant="h2">Популярное</Typography>
        </Container>
        <Container style={{ padding: '0px', paddingTop: '12px' }}>
          <Swiper
            slidesPerView={6}
            spaceBetween={7}
            style={{ paddingLeft: '16px' }}
          >
            {popularSubscriptions.map((item) => (
              <SwiperSlide>
                <PopularSubscription {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Stack>

      <Container>
        <Stack flexDirection="column" gap="12px">
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="h2">Каталог</Typography>

            <Typography variant="link">
              <Link
                to={'/catalog'}
                style={{
                  color: 'inherit',
                  cursor: 'inherit',
                  textDecoration: 'inherit',
                }}
              >
                Все категории
              </Link>
            </Typography>
          </Stack>
          <MainCard
            title="Избранное"
            subtitle="Храните интересное здесь"
            image={heart}
          />
          {catalog.map((card, id) => (
            <MainCard key={id} {...card} />
          ))}
        </Stack>
      </Container>

      <Container>
        <Stack flexDirection="column">
          <Typography variant="h2">Часто задаваемые вопросы</Typography>
          <Container style={{ padding: '0px' }}>
            {faq.map((item, id) => (
              <Accordion key={id} {...item} id={`${id}`} />
            ))}
          </Container>
        </Stack>
      </Container>
    </Stack>
  );
};
