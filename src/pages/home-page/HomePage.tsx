import { Chip, Container, IconButton, Stack, Typography } from '@mui/material';
// @ts-expect-error: не работают типы в используемой библиотеке
import { Bell, ChevronLeft } from 'react-coolicons';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { catalog } from '../../mocks/db';
import { useGetMySubscriptionsQuery } from '../../services/api';
import { Accordion } from '../../shared/ui/accordion';
import { NonModalDialog } from '../../shared/ui/non-modal-dialog';
import { MainCard } from '../../widgets/main-card';
import { MySubscriptionSwiperCard } from '../../widgets/my-subscription-swiper-card';
import { PopularSubscription } from '../../widgets/popular-subscription';
import { PopularSubscriptionProps } from '../../widgets/popular-subscription/PopularSubscription';
import { SummaryPaymentHistory } from '../../widgets/summary-payment-history';
import { faq } from './homeMock';

//TODO курсор на ссылках
export const HomePage = () => {
  const navigate = useNavigate();
  const {
    data: mySubscriptions,
    isLoading,
    isError,
  } = useGetMySubscriptionsQuery();
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
            Управления подписками
          </Typography>
          <IconButton>
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
            <Typography variant="link">
              <Link
                to={'/mysubscriptions'}
                style={{
                  color: 'inherit',
                  cursor: 'inherit',
                  textDecoration: 'inherit',
                }}
              >
                Все мои подписки
              </Link>
            </Typography>
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
            {/* TODO добавить отступ справа */}
            {mySubscriptions?.map((item) => (
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
            {/* TODO сделать карточки ссылками */}
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
                  textDecoration: 'inherit',
                }}
              >
                Все категории
              </Link>
            </Typography>
          </Stack>
          {/* INFO нет api для получения категорий для главного экрана */}
          {catalog.map((card) => (
            <Link
              to={`/catalog?${createSearchParams({ activeTab: card.categoryId.toString() })}`}
              style={{ textDecoration: 'inherit' }}
            >
              <MainCard key={card.id} {...card} />
            </Link>
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
