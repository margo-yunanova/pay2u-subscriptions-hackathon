import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../shared/utils/constants';
import { SubscriptionCardPageProps } from '../pages/subscription-card-page/SubscriptionCardPage';

export const subscriptionsApi = createApi({
  reducerPath: 'subscriptionsApi',
  tagTypes: ['Subscriptions'],
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
  }),
});

export const { useGetSubscriptionsQuery } = subscriptionsApi;
