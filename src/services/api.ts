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
      Record<'categoryId', number>
    >({
      query: (category) => {
        if (category.categoryId === 0) {
          return { url: 'subscriptions' };
        } else {
          return {
            url: 'subscriptions',
            params: category,
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
  }),
});

export const {
  useGetSubscriptionsQuery,
  useGetSubscriptionByIdQuery,
  useGetCategoriesQuery,
  useOrderSubscriptionMutation,
} = api;
