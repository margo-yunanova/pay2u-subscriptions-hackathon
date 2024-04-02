import { http, HttpResponse } from 'msw';
import Okko from '../assets/Okko.png';
import VkMusic from '../assets/VkMusic.png';
import Wink from '../assets/Wink.png';
import Yandex from '../assets/Yandex.png';
import { categories, mySubscriptions, services, tariffs } from './db';

const getCategories = http.get('/categories', () =>
  HttpResponse.json(categories),
);

const getPopularSubscriptions = http.get('/popular', () =>
  HttpResponse.json([
    { title: 'Okko', image: Okko },
    { title: 'Vk Music', image: VkMusic },
    { title: 'Wink', image: Wink },
    { title: 'яндекс плюс', image: Yandex },
    { title: 'Okko', image: Okko },
    { title: 'VkMusic', image: VkMusic },
    { title: 'Wink', image: Wink },
    { title: 'яндекс плюс', image: Yandex },
  ]),
);

const getSubscriptionsByCategory = http.get('/subscriptions', ({ request }) => {
  let subscriptions = [...services];
  const url = new URL(request.url);

  const categoryId = url.searchParams.get('categoryId');
  if (categoryId) {
    subscriptions = subscriptions.filter((service) =>
      service.categories.some((category) => category.id === +categoryId),
    );
  }

  const isFavorite = url.searchParams.get('is-favorite');
  if (isFavorite) {
    subscriptions = subscriptions.filter((service) => service.is_favorite);
  }

  const name = url.searchParams.get('name');
  if (name) {
    subscriptions = subscriptions.filter((service) =>
      service.name.includes(name),
    );
  }

  return HttpResponse.json(subscriptions);
});

const getSubscriptionById = http.get('/subscriptions/:id', ({ params }) => {
  const { id } = params;

  const subscription = services.find((item) => item.id === +id);

  return HttpResponse.json(subscription);
});

const orderSubscription = http.post(
  '/subscriptions/:id/order',
  async ({ request, params }) => {
    const { id } = params;
    const requestBody = await request.json();

    const subscription = mySubscriptions.find((item) => item.id === +id);
    const tariff = tariffs.find((tariff) => tariff.id === requestBody?.tariff)!;

    if (!subscription) {
      const data = services.find((item) => item.id === +id)!;
      mySubscriptions.push({
        id: +id,
        name: data.name,
        logo: data.logo,
        cashback: data.cashback,
        tariff: { ...tariff },
        pay_status: true,
        dueDate: '31.12.2024',
      });
      return HttpResponse.json(mySubscriptions.at(-1));
    }
    subscription.tariff = { ...tariff };

    return HttpResponse.json(subscription);
  },
);

const getMySubscriptions = http.get('/subscriptions/my', () => {
  console.log('get');
  return HttpResponse.json(mySubscriptions);
});

export const handlers = [
  getCategories,
  getPopularSubscriptions,
  getMySubscriptions,
  getSubscriptionsByCategory,
  getSubscriptionById,
  orderSubscription,
];
