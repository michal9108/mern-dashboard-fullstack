import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery } = api;
export const { useGetProductsQuery } = api;
export const { useGetTransactionsQuery } = api;

//calling the endpoint BE, API calls, morgan

/* "Redux toolkit" used to manage state - accessing the state globally, 
 "Redux toolkit query" used to make API calls and that state can be used to be stored in global store
 Boiler plate code // createApi makes us call the BE - fetchBaseQuery function from Redux toolkit Query,
baseUrl  - url we call everytime we make API call it has format import.meta.env.VITE_BASE_URL/kpi/kpis/  and saving it into Kpis tag
useGetKpisQuery hook */
