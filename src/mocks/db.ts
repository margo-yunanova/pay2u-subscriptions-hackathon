import Okko from '../assets/Okko.png';
import VkMusic from '../assets/VkMusic.png';
import Wink from '../assets/Wink.png';
import Yandex from '../assets/Yandex.png';
import Ivi from '../assets/ivi.png';
import Litres from '../assets/Litres.png';
import Megogo from '../assets/Megogo.png';
import Storytel from '../assets/vendors.png';
import myBook from '../assets/myBook.png';
import banner1 from '../assets/service/1.png';
import banner2 from '../assets/service/2.png';
import banner3 from '../assets/service/3.png';
import banner4 from '../assets/service/4.png';
import { CategoryProps } from '../pages/catalog-page/CatalogPage';
import { TariffCardProps } from '../widgets/tariff-card/TariffCard';

export const categories = [
  {
    id: 1,
    name: 'Кино',
    slug: 'IDIw7',
  },
  {
    id: 2,
    name: 'Книги',
    slug: 'IDIw7',
  },
  {
    id: 3,
    name: 'Музыка',
    slug: 'IDIw7',
  },
  {
    id: 4,
    name: 'Прочее',
    slug: 'IDIw7',
  },
];

const banners = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
  { id: 4, image: banner4 },
  { id: 5, image: banner1 },
  { id: 6, image: banner2 },
  { id: 7, image: banner3 },
  { id: 8, image: banner4 },
];

const tariffs: TariffCardProps[] = [
  {
    id: 1,
    period: 1,
    discount: 0,
    price_per_month: 300,
    price_per_period: 300,
    periodName: 'monthly',
  },
  {
    id: 2,
    period: 3,
    discount: 3,
    price_per_month: 290,
    price_per_period: 870,
    periodName: 'quarterly',
  },
  {
    id: 3,
    period: 6,
    discount: 7,
    price_per_month: 280,
    price_per_period: 1680,
    periodName: 'semiannually',
  },
  {
    id: 4,
    period: 12,
    discount: 12,
    price_per_month: 250,
    price_per_period: 300,
    periodName: 'annually',
  },
];

export const services: {
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
}[] = [
  {
    id: 1234,
    name: 'Иви',
    logo: Ivi,
    description:
      'Подписка Иви представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    categories: [categories[0]],
    cashback: 15,
    min_price: 199,
    subtitle: 'ТВ, фильмы, сериалы',
    banners,
    tariffs,
    is_favorite: true,
  },
  {
    id: 5678,
    name: 'ЛитРес',
    cashback: 10,
    logo: Litres,
    min_price: 299,
    categories: [categories[1]],
    subtitle: 'Книги, аудиокниги',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
  },
  {
    id: 9012,
    name: 'MEGOGO',
    cashback: 20,
    logo: Megogo,
    min_price: 249,
    categories: [categories[1]],
    subtitle: 'Фильмы, сериалы, мультфильмы',
    banners,
    description:
      'Подписка MEGOGO представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
  },
  {
    id: 3456,
    name: 'Storytel',
    cashback: 25,
    logo: Storytel,
    min_price: 199,
    categories: [categories[1]],
    subtitle: 'Аудиокниги, книги на любой вкус',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
  },
  {
    id: 7890,
    name: 'MyBook',
    cashback: 18,
    logo: myBook,
    min_price: 179,
    categories: [categories[1]],
    subtitle: 'Электронные книги, журналы',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
  },
  {
    id: 2345,
    name: 'Okko',
    cashback: 12,
    logo: Okko,
    min_price: 299,
    categories: [categories[0]],
    subtitle: 'Фильмы, сериалы, мультфильмы',
    banners,
    description:
      'Подписка Okko представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
  },
  {
    id: 6789,
    name: 'Яндекс.Плюс',
    cashback: 30,
    logo: Yandex,
    min_price: 159,
    categories: [categories[3]],
    subtitle: 'Сервисы Яндекса, кешбэк и акции',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
  },
  {
    id: 5123,
    name: 'VkMusic',
    cashback: 15,
    logo: VkMusic,
    min_price: 199,
    categories: [categories[2]],
    subtitle: 'Песни, альбомы, плейлисты',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
  },
  {
    id: 4567,
    name: 'Wink',
    cashback: 10,
    logo: Wink,
    min_price: 299,
    categories: [categories[0]],
    subtitle: 'Фильмы, сериалы, мультфильмы',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
  },
  {
    id: 2468,
    name: 'Netflix',
    cashback: 20,
    logo: 'Netflix',
    min_price: 249,
    categories: [categories[0]],
    subtitle: 'Фильмы, сериалы, оригинальные контент',
    banners,
    description:
      'Подписка Netflix представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
  },
  {
    id: 8910,
    name: 'Spotify',
    cashback: 5,
    logo: 'Spotify',
    min_price: 99,
    categories: [categories[2]],
    subtitle: 'Стриминговая музыкальная платформа',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
  },
  {
    id: 1112,
    name: 'HBO',
    cashback: 10,
    logo: 'HBO',
    min_price: 199,
    categories: [categories[0]],
    subtitle: 'Фильмы, сериалы, оригинальный контент',
    banners,
    description:
      'Подписка HBO представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
  },
  {
    id: 1314,
    name: 'Audible',
    cashback: 15,
    logo: 'Audible',
    min_price: 149,
    categories: [categories[1]],
    subtitle: 'Аудиокниги',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
  },
  {
    id: 1516,
    name: 'Apple Music',
    cashback: 5,
    logo: 'AppleMusic',
    min_price: 149,
    categories: [categories[2]],
    subtitle: 'Песни, альбомы, плейлисты',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
  },
  {
    id: 1718,
    name: 'Google Play Books',
    cashback: 8,
    logo: 'GooglePlayBooks',
    min_price: 199,
    categories: [categories[1]],
    subtitle: 'Электронные книги',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
  },
  {
    id: 920,
    name: 'Amazon Prime Video',
    cashback: 10,
    logo: 'AmazonPrimeVideo',
    min_price: 199,
    categories: [categories[0]],
    subtitle: 'Фильмы, сериалы, оригинальный контент',
    banners,
    description:
      'Подписка Amazon Prime Video представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
  },
];
