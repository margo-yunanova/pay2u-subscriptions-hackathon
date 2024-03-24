import ticket from '../../assets/ticket.svg';
import disk from '../../assets/disk.svg';
import Okko from '../../assets/Okko.png';
import VkMusic from '../../assets/VkMusic.png';
import Wink from '../../assets/Wink.png';
import Yandex from '../../assets/Yandex.png';

export const catalog = [
  { title: 'Кино', subtitle: 'От 250 ₽ в месяц', image: ticket },
  { title: 'Музыка', subtitle: 'От 199 ₽ в месяц', image: disk },
];

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

export const popular = [
  { title: 'Okko', image: Okko },
  { title: 'Vk Music', image: VkMusic },
  { title: 'Wink', image: Wink },
  { title: 'яндекс плюс', image: Yandex },
  { title: 'Okko', image: Okko },
  { title: 'VkMusic', image: VkMusic },
  { title: 'Wink', image: Wink },
  { title: 'яндекс плюс', image: Yandex },
];

export const subscriptions = [
  {
    title: 'IVI',
    period: '3',
    dueDate: '11.06.2024',
  },
  {
    title: 'Okko',
    period: '1',
    dueDate: '20.07.2024',
    logo: Okko,
  },
  {
    title: 'Vk Music',
    period: '6',
    dueDate: '15.09.2024',
    logo: VkMusic,
  },
  {
    title: 'Wink',
    period: '12',
    dueDate: '02.12.2024',
    logo: Wink,
  },
  {
    title: 'яндекс плюс',
    period: '1',
    dueDate: '05.03.2025',
    logo: Yandex,
  },
];
