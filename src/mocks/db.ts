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
import ticket from '../assets/ticket.svg';
import disk from '../assets/disk.svg';
import {
  IBanner,
  ICategory,
  IMainCard,
  IMySubscription,
  ITariff,
} from '../shared/utils/type';

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

export const catalog: IMainCard[] = [
  {
    id: 2,
    title: 'Кино',
    subtitle: 'От 250 ₽ в месяц',
    image: ticket,
    categoryId: categories[0].id,
  },
  {
    id: 3,
    title: 'Музыка',
    subtitle: 'От 199 ₽ в месяц',
    image: disk,
    categoryId: categories[2].id,
  },
];

const banners: IBanner[] = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
  { id: 4, image: banner4 },
  { id: 5, image: banner1 },
  { id: 6, image: banner2 },
  { id: 7, image: banner3 },
  { id: 8, image: banner4 },
];

export const tariffs: ITariff[] = [
  {
    id: 1,
    period: 1,
    discount: 0,
    price_per_month: 300,
    price_per_period: 300,
  },
  {
    id: 2,
    period: 3,
    discount: 3,
    price_per_month: 290,
    price_per_period: 870,
  },
  {
    id: 3,
    period: 6,
    discount: 7,
    price_per_month: 280,
    price_per_period: 1680,
  },
  {
    id: 4,
    period: 12,
    discount: 12,
    price_per_month: 250,
    price_per_period: 300,
  },
];

export const payment_account = [
  { id: 1, logo: '', name: 'Система быстрых платежей' },
  { id: 2, logo: '', name: 'Яндекс.Пей' },
  { id: 3, logo: '', name: 'Наличные' },
];

export const services: {
  id: number;
  name: string;
  cashback: number;
  logo: string;
  min_price: number;
  categories: ICategory[];
  description: string;
  banners: { id: number; image: string }[];
  subtitle: string;
  tariffs: ITariff[];
  is_favorite: boolean;
  popular_rate: number;
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
    popular_rate: 85,
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
    popular_rate: 86,
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
    popular_rate: 87,
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
    popular_rate: 88,
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
    popular_rate: 89,
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
    popular_rate: 90,
  },
  {
    id: 6789,
    name: 'Яндекс.Плюс',
    cashback: 30,
    logo: Yandex,
    min_price: 159,
    categories: [categories[3], categories[0], categories[2]],
    subtitle: 'Сервисы Яндекса, кешбэк и акции',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
    popular_rate: 91,
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
    popular_rate: 92,
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
    popular_rate: 93,
  },
  {
    id: 2468,
    name: 'Netflix',
    cashback: 20,
    logo: 'https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png',
    min_price: 249,
    categories: [categories[0]],
    subtitle: 'Фильмы, сериалы, оригинальные контент',
    banners,
    description:
      'Подписка Netflix представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
    popular_rate: 94,
  },
  {
    id: 8910,
    name: 'Spotify',
    cashback: 5,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Spotify_logo_2013%E2%80%932015.svg',
    min_price: 99,
    categories: [categories[2]],
    subtitle: 'Стриминговая музыкальная платформа',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
    popular_rate: 95,
  },
  {
    id: 1112,
    name: 'HBO',
    cashback: 10,
    logo: 'https://i.pinimg.com/originals/8b/02/00/8b020050690f955ccb306cdf51324aea.png',
    min_price: 199,
    categories: [categories[0]],
    subtitle: 'Фильмы, сериалы, оригинальный контент',
    banners,
    description:
      'Подписка HBO представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
    popular_rate: 96,
  },
  {
    id: 1314,
    name: 'Audible',
    cashback: 15,
    logo: 'https://cdn.iconscout.com/icon/free/png-512/free-audible-3521288-2944707.png?f=webp&w=256',
    min_price: 149,
    categories: [categories[1]],
    subtitle: 'Аудиокниги',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
    popular_rate: 97,
  },
  {
    id: 1516,
    name: 'Apple Music',
    cashback: 5,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg',
    min_price: 149,
    categories: [categories[2]],
    subtitle: 'Песни, альбомы, плейлисты',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
    popular_rate: 98,
  },
  {
    id: 1718,
    name: 'Google Play Books',
    cashback: 8,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Google_Play_Books_icon_%282023%29.svg',
    min_price: 199,
    categories: [categories[1]],
    subtitle: 'Электронные книги',
    banners,
    description:
      'Подписка Wink представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: true,
    popular_rate: 99,
  },
  {
    id: 920,
    name: 'Amazon Prime Video',
    cashback: 10,
    logo: 'https://i.pinimg.com/originals/7d/53/6b/7d536b5057d6b0d50986a1ec155b034a.jpg',
    min_price: 199,
    categories: [categories[0]],
    subtitle: 'Фильмы, сериалы, оригинальный контент',
    banners,
    description:
      'Подписка Amazon Prime Video представляет собой огромный каталог фильмов и сериалов, доступных без рекламы и в лучшем качестве. Здесь вы найдете широкий выбор контента для всех возрастов и вкусов, включая самые последние кинопремьеры и классические фильмы.',
    tariffs,
    is_favorite: false,
    popular_rate: 100,
  },
];

export let mySubscriptions: IMySubscription[];

export const faq = [
  {
    title: 'Как подключить подписку',
    details:
      'Подписку можно подключить в мобильном приложении или на сайте tinkoff.ru. Если у вас есть приложение Тинькофф, на главном экране перейдите в раздел «Кэшбэк и бонусы» → подписка Tinkoff Pro → «Подключить».',
  },
  {
    title: 'Где можно увидеть оформленные подписки',
    details:
      'Вы можете увидеть оформленные подписки в разделе "Мои подписки" на главной странице.',
  },
  {
    title: 'Если уже есть подписка',
    details:
      'Если у вас уже есть подписка, вы можете найти ее в разделе "Мои подписки" на вашей личной странице.',
  },
  {
    title: 'Как отключить подписку',
    details:
      'Чтобы отключить подписку, просто перейдите в раздел "Управление подписками" в настройках вашего аккаунта и выберите соответствующую подписку для отмены.',
  },
  {
    title: 'Не нашел нужный сервис',
    details:
      'К сожалению, мы не обнаружили требуемый сервис в нашей базе данных. Попробуйте позже или обратитесь к нашей службе поддержки для получения дополнительной помощи.',
  },
];

export let discoveredSubscriptions: IMySubscription[];

const setupDiscoveredSubscriptions = (scenario: UserScenario) => {
  if (scenario !== 'switcher') {
    discoveredSubscriptions = [];
    return;
  }
  discoveredSubscriptions = [
    {
      id: 1234,
      name: 'IVI',
      tariff: tariffs[0],
      due_date: '',
      logo: Ivi,
      cashback: 10,
      pay_status: true,
    },
    {
      id: 2345,
      name: 'Okko',
      tariff: tariffs[1],
      due_date: '',
      logo: Okko,
      cashback: 10,
      pay_status: true,
    },
    {
      id: 5123,
      name: 'Vk Music',
      tariff: tariffs[2],
      due_date: '',
      logo: VkMusic,
      cashback: 10,
      pay_status: true,
    },
    {
      id: 4567,
      name: 'Wink',
      tariff: tariffs[3],
      due_date: '',
      logo: Wink,
      cashback: 10,
      pay_status: true,
    },
    {
      id: 6789,
      name: 'яндекс плюс',
      tariff: tariffs[0],
      due_date: '',
      logo: Yandex,
      cashback: 10,
      pay_status: true,
    },
  ];
};

export type UserScenario = 'active' | 'new' | 'switcher';

export const setupUserScenario = (scenario: UserScenario) => {
  setupDiscoveredSubscriptions(scenario);

  if (scenario !== 'active') {
    mySubscriptions = [];
    return;
  }
  mySubscriptions = [
    {
      id: 1234,
      name: 'IVI',
      tariff: tariffs[0],
      due_date: '2024-12-31T23:59:59.200Z',
      logo: Ivi,
      cashback: 10,
      pay_status: true,
    },
    {
      id: 2345,
      name: 'Okko',
      tariff: tariffs[1],
      due_date: '2024-12-31T23:59:59.200Z',
      logo: Okko,
      cashback: 10,
      pay_status: false,
    },
    {
      id: 5123,
      name: 'Vk Music',
      tariff: tariffs[2],
      due_date: '2024-12-31T23:59:59.200Z',
      logo: VkMusic,
      cashback: 10,
      pay_status: true,
    },
    {
      id: 4567,
      name: 'Wink',
      tariff: tariffs[3],
      due_date: '2024-12-31T23:59:59.200Z',
      logo: Wink,
      cashback: 10,
      pay_status: false,
    },
    {
      id: 6789,
      name: 'яндекс плюс',
      tariff: tariffs[0],
      due_date: '2024-12-31T23:59:59.200Z',
      logo: Yandex,
      cashback: 10,
      pay_status: true,
    },
  ];
};
