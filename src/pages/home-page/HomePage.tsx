import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Accordion } from '../../shared/ui/accordion';
import { Chip } from '../../shared/ui/chip';
import { NonModalDialog } from '../../shared/ui/non-modal-dialog';
import { MainCard } from '../../widgets/main-card';
import { MySubscriptionsCard } from '../../widgets/my-subscriptions-card';
import { MySubscriptionsCardProps } from '../../widgets/my-subscriptions-card/MySubscriptionsCard';
import { PopularSubscription } from '../../widgets/popular-subscription';
import { PopularSubscriptionProps } from '../../widgets/popular-subscription/PopularSubscription';
import { SummaryPaymentHistory } from '../../widgets/summary-payment-history';
import { catalog, faq } from './homeMock';
import { ChevronLeft, Bell } from 'react-coolicons';

interface HomePageProps {
  popularSubscriptions: PopularSubscriptionProps[];
  mySubscriptionsCard: MySubscriptionsCardProps[];
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
            <Chip label="Кешбэк до 30%" />
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

      <Container>
        <Stack flexDirection="column" gap="12px">
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="h2">Мои подписки</Typography>
            <Typography variant="link">Все мои подписки</Typography>
          </Stack>
          <Box sx={{ marginRight: '-2rem' }}>
            <Swiper
              slidesPerView={2.5}
              spaceBetween={12}
              style={{ padding: '1px' }}
            >
              {mySubscriptionsCard.map((item) => (
                <SwiperSlide>
                  <MySubscriptionsCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Stack>
      </Container>

      <Container>
        <Stack flexDirection="column" gap="12px">
          <Typography variant="h2">Популярное</Typography>
          <Box sx={{ marginRight: '-2rem' }}>
            <Swiper slidesPerView={6} spaceBetween={15}>
              {popularSubscriptions.map((item) => (
                <SwiperSlide>
                  <PopularSubscription {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Stack>
      </Container>

      <Container>
        <Stack flexDirection="column" gap="12px">
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="h2">Каталог</Typography>
            <Typography variant="link">Все категории</Typography>
          </Stack>
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
