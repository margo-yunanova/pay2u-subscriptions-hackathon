import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CategoryProps } from '../pages/catalog-page/CatalogPage';
import { SubscriptionCardPageProps } from '../pages/subscription-card-page/SubscriptionCardPage';
import { baseUrl } from '../shared/utils/constants';

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
      SubscriptionCardPageProps[],
      Record<string, string | number>
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
    getSubscriptionById: builder.query<
      SubscriptionCardPageProps,
      string | undefined
    >({
      query: (id) => `subscriptions/${id}`,
      providesTags: ['Subscription'],
    }),
    orderSubscription: builder.mutation({
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
    getMySubscriptions: builder.query({
      query: (arg) => ({
        url: 'subscriptions/my',
        params: { pay_status: arg?.pay_status },
      }),
      providesTags: ['mySubscriptions'],
    }),
    getTariff: builder.query({
      query: (id) => `subscriptions/${id}/mytariff`,
      providesTags: ['Tariff'],
    }),
    changeTariff: builder.mutation<string, Record<string, string>>({
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
    getTariffs: builder.query({
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
