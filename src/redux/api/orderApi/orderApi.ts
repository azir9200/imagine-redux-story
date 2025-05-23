import { baseApi } from "../baseApi/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create api
    orderCreate: builder.mutation({
      query: (payload) => ({
        url: `api/order/create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Orders"],
    }),

    getVerifyOrder: builder.query({
      query: (order_id) => ({
        url: `api/order/verify`,
        params: { order_id },
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    // all order api
    getAllOrder: builder.query({
      query: () => ({
        url: `api/order`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    //get Single Order
    getSingleOrder: builder.query({
      query: () => ({
        url: `api/order/personal`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),

    // Fetch all products
    getAllProduct: builder.query({
      query: () => ({
        url: "api/product",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useOrderCreateMutation,
  useGetVerifyOrderQuery,
  useGetAllOrderQuery,
  useGetSingleOrderQuery,
  useGetAllProductQuery,
} = productApi;
