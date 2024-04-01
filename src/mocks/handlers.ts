import { http, HttpResponse } from 'msw';
import Okko from '../assets/Okko.png';
import VkMusic from '../assets/VkMusic.png';
import Wink from '../assets/Wink.png';
import Yandex from '../assets/Yandex.png';
import { categories, services } from './db';

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
  console.log(subscriptions);
  return HttpResponse.json(subscriptions);
});

export const handlers = [
  getCategories,
  getPopularSubscriptions,
  getSubscriptionsByCategory,
];
