import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CategoryProps } from '../pages/catalog-page/CatalogPage';
import { SubscriptionCardPageProps } from '../pages/subscription-card-page/SubscriptionCardPage';
import { baseUrl } from '../shared/utils/constants';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
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
    }),
    getSubscriptionById: builder.query<
      SubscriptionCardPageProps,
      string | undefined
    >({
      query: (id) => `subscriptions/${id}`,
    }),
    orderSubscription: builder.mutation({
      query: ({ data, subscriptionId }) => ({
        url: `subscriptions/${subscriptionId}/order/`,
        method: 'POST',
        body: data,
      }),
    }),
    getCategories: builder.query<CategoryProps[], void>({
      query: () => 'categories',
    }),
    getMySubscriptions: builder.query({
      query: (arg) => ({
        url: 'subscriptions/my',
        params: { pay_status: arg?.pay_status },
      }),
    }),
  }),
});

export const {
  useGetSubscriptionsQuery,
  useGetSubscriptionByIdQuery,
  useGetCategoriesQuery,
  useOrderSubscriptionMutation,
  useGetMySubscriptionsQuery,
} = api;
