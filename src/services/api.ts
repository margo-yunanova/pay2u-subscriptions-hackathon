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
    'discoveredSubscriptions',
  ],
  endpoints: (builder) => ({
    getSubscriptions: builder.query<
      IMainSubscription[],
      {
        categoryId?: number;
        name?: string;
        ordering?: 'popular_rate';
        is_favorite?: boolean;
      }
    >({
      query: ({ categoryId, name, ordering, is_favorite }) => {
        if (categoryId === 0) {
          return {
            url: 'subscriptions',
            params: { is_favorite, name, ordering },
          };
        } else {
          return {
            url: 'subscriptions',
            params: { is_favorite, name, ordering, categoryId },
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
    getDiscoveredSubscriptions: builder.query<IMySubscription[], void>({
      query: () => 'subscriptions/discovered',
      providesTags: ['discoveredSubscriptions'],
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
    setFavoriteSubscription: builder.mutation<
      void,
      { id: string; value: boolean }
    >({
      query: ({ id, value }) => {
        const method = value ? 'POST' : 'DELETE';
        return { url: `subscriptions/${id}/favorite`, method };
      },
      invalidatesTags: ['Subscriptions', 'Subscription', 'mySubscriptions'],
    }),
  }),
});

export const {
  useGetSubscriptionsQuery,
  useGetSubscriptionByIdQuery,
  useGetDiscoveredSubscriptionsQuery,
  useGetCategoriesQuery,
  useOrderSubscriptionMutation,
  useGetMySubscriptionsQuery,
  useGetTariffQuery,
  useChangeTariffMutation,
  useGetTariffsQuery,
  useSetFavoriteSubscriptionMutation,
} = api;
