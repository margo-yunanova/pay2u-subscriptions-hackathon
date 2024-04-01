import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../shared/utils/constants';
import { CategoryProps } from '../pages/catalog-page/CatalogPage';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  tagTypes: ['Categories'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryProps[], void>({
      query: () => 'categories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
