export interface ICategory {
  id: number;
  name: string;
}

export interface ITariff {
  id: number;
  period: number;
  discount: number;
  price_per_month: number;
  price_per_period: number;
}

export interface IMyTariff {
  id: number;
  price_per_period: number;
  due_date: string;
  cashback: number;
  price_per_month: number;
  payment_account: number;
  // TODO: check it
  period: number;
  discount: number;
}

export interface IBanner {
  id: number;
  image: string;
}

export interface IMainSubscription {
  id: number;
  name: string;
  logo: string;
  cashback: number;
  description: string;
  categories: ICategory[];
  popular_rate: number;
  min_price: number;
  is_favorite: boolean;
}

export interface ISubscription {
  id: number;
  name: string;
  logo: string;
  cashback: number;
  description: string;
  categories: ICategory[];
  popular_rate: number;
  is_favorite: boolean;
  title: string;
  banners: IBanner[];
  // TODO: not in swagger
  tariffs: ITariff[];
}

export interface IMySubscription {
  id: number;
  name: string;
  logo: string;
  cashback: number;
  tariff: ITariff;
  pay_status: boolean;
  due_date: string;
}

export interface ISubscriptionOrder {
  name: string;
  phone_number: string;
  email: string;
  tariff: number;
  payment_account: number;
}

export interface IMainCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  categoryId: number;
}
