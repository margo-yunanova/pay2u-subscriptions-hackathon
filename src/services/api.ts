import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../shared/utils/constants';
import { SubscriptionCardPageProps } from '../pages/subscription-card-page/SubscriptionCardPage';
import { CategoryProps } from '../pages/catalog-page/CatalogPage';

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
    getCategories: builder.query<CategoryProps[], void>({
      query: () => 'categories',
    }),
  }),
});

export const {
  useGetSubscriptionsQuery,
  useGetSubscriptionByIdQuery,
  useGetCategoriesQuery,
} = api;
