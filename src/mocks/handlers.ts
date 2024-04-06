import { http, HttpResponse } from 'msw';
import { categories, mySubscriptions, services, tariffs } from './db';

const getCategories = http.get('/api/v1/categories', () =>
  HttpResponse.json(categories),
);

const getSubscriptions = http.get('/api/v1/subscriptions', ({ request }) => {
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
      service.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  const ordering = url.searchParams.get('ordering');
  if (ordering) {
    subscriptions.sort((a, b) => {
      if (a.popular_rate > b.popular_rate) return -1;
      if (a.popular_rate < b.popular_rate) return 1;
      return 0;
    });
  }

  return HttpResponse.json(subscriptions);
});

const getSubscriptionById = http.get(
  '/api/v1/subscriptions/:id',
  ({ params }) => {
    const { id } = params;

    const subscription = services.find((item) => item.id === +id);

    return HttpResponse.json(subscription);
  },
);

const orderSubscription = http.post<{ id: string }, { tariff: number }>(
  '/api/v1/subscriptions/:id/order',
  async ({ request, params }) => {
    const { id } = params;
    const requestBody = await request.json();

    const subscription = mySubscriptions.find((item) => item.id === +id);
    const tariff = tariffs.find((tariff) => tariff.id === requestBody.tariff)!;

    if (!subscription) {
      const data = services.find((item) => item.id === +id)!;
      mySubscriptions.push({
        id: +id,
        name: data.name,
        logo: data.logo,
        cashback: data.cashback,
        tariff: { ...tariff },
        pay_status: true,
        due_date: '31.12.2024',
      });
      return HttpResponse.json(mySubscriptions.at(-1));
    }
    subscription.tariff = { ...tariff };

    return HttpResponse.json(subscription);
  },
);

const getMySubscriptions = http.get(
  '/api/v1/subscriptions/my',
  ({ request }) => {
    const url = new URL(request.url);

    const pay_status = url.searchParams.get('pay_status') === 'true';

    return HttpResponse.json(
      mySubscriptions.filter((item) => pay_status === item.pay_status),
    );
  },
);

const getMyTariff = http.get(
  '/api/v1/subscriptions/:id/mytariff',
  ({ params }) => {
    const { id } = params;

    const tariff = mySubscriptions.find((item) => item.id === +id)?.tariff;

    return HttpResponse.json(tariff);
  },
);

const changeTariff = http.patch<{ id: string }, { tariff: number }>(
  '/api/v1/subscriptions/:id/change_tariff',
  async ({ request, params }) => {
    const { id } = params;
    const requestBody = await request.json();

    const subscription = mySubscriptions.find((item) => item.id === +id);
    const tariff = tariffs.find((item) => item.id === requestBody.tariff);
    if (subscription && tariff) {
      subscription.tariff = tariff;
    }
    return HttpResponse.json({ tariff: requestBody.tariff });
  },
);

const getTariffs = http.get(
  '/api/v1/subscriptions/:id/tariffs',
  ({ params }) => {
    const { id } = params;

    const tariffs = services.find((item) => item.id === +id)?.tariffs;

    return HttpResponse.json(tariffs);
  },
);

export const handlers = [
  getCategories,
  getMySubscriptions,
  getSubscriptions,
  getSubscriptionById,
  orderSubscription,
  getMyTariff,
  changeTariff,
  getTariffs,
];
