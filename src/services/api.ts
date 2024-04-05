import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../shared/utils/constants';
import {
  ICategory,
  IMainSubscription,
  IMySubscription,
  IMyTariff,
  ISubscription,
  ISubscriptionOrder,
  ITariff,
} from '../shared/utils/type';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: [
    'Subscriptions',
    'Subscription',
    'Tariffs',
    'Tariff',
    'mySubscriptions',
  ],
  endpoints: (builder) => ({
    getSubscriptions: builder.query<
      IMainSubscription[],
      {
        categoryId?: number;
        name?: string;
        ordering?: 'popular_rate';
        'is-favorite'?: boolean;
      }
    >({
      query: (arg) => {
        if (arg.categoryId === 0) {
          return {
            url: 'subscriptions',
            params: {
              'is-favorite': arg?.['is-favorite'],
              name: arg?.name,
              ordering: arg?.ordering,
            },
          };
        } else {
          return {
            url: 'subscriptions',
            params: {
              'is-favorite': arg['is-favorite'],
              name: arg?.name,
              ordering: arg?.ordering,
              categoryId: arg?.categoryId,
            },
          };
        }
      },
      providesTags: ['Subscriptions'],
    }),
    getSubscriptionById: builder.query<ISubscription, string | undefined>({
      query: (id) => `subscriptions/${id}`,
      providesTags: ['Subscription'],
    }),
    orderSubscription: builder.mutation<
      ISubscriptionOrder,
      { data: ISubscriptionOrder; subscriptionId: number }
    >({
      query: ({ data, subscriptionId }) => ({
        url: `subscriptions/${subscriptionId}/order/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [
        'Subscriptions',
        'Subscription',
        'Tariff',
        'mySubscriptions',
      ],
    }),
    getCategories: builder.query<ICategory[], void>({
      query: () => 'categories',
    }),
    getMySubscriptions: builder.query<
      IMySubscription[],
      { pay_status: boolean }
    >({
      query: (arg) => ({
        url: 'subscriptions/my',
        params: { pay_status: arg?.pay_status },
      }),
      providesTags: ['mySubscriptions'],
    }),
    getTariff: builder.query<IMyTariff, string | undefined>({
      query: (id) => `subscriptions/${id}/mytariff`,
      providesTags: ['Tariff'],
    }),
    changeTariff: builder.mutation<
      { tariff: number },
      { subscriptionId: number; tariffId: number }
    >({
      query: (arg) => ({
        url: `subscriptions/${arg?.subscriptionId}/change_tariff`,
        method: 'PATCH',
        body: { tariff: arg?.tariffId },
      }),
      invalidatesTags: [
        'Subscriptions',
        'Subscription',
        'Tariff',
        'mySubscriptions',
      ],
    }),
    getTariffs: builder.query<ITariff[], string | undefined>({
      query: (id) => `subscriptions/${id}/tariffs`,
      providesTags: ['Tariffs'],
    }),
  }),
});

export const {
  useGetSubscriptionsQuery,
  useGetSubscriptionByIdQuery,
  useGetCategoriesQuery,
  useOrderSubscriptionMutation,
  useGetMySubscriptionsQuery,
  useGetTariffQuery,
  useChangeTariffMutation,
  useGetTariffsQuery,
} = api;
