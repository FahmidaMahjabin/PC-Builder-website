import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-library-server-green.vercel.app/product",
  }),
  endpoints: (builder) => ({
    getAllproduct: builder.query({
      query: () => `/all-products`,
    }),
    getProductByCategory: builder.query({
      query: () => `/:category`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllproductQuery, useGetProductByCategoryQuery } = apiSlice;
