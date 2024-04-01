import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../shared/utils/constants';
import { SubscriptionCardPageProps } from '../pages/subscription-card-page/SubscriptionCardPage';

export const subscriptionApi = createApi({
  reducerPath: 'subscriptionApi',
  tagTypes: ['Subscription'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSubscriptionById: builder.query<
      SubscriptionCardPageProps,
      string | undefined
    >({
      query: (id) => `subscriptions/${id}`,
    }),
  }),
});

export const { useGetSubscriptionByIdQuery } = subscriptionApi;
