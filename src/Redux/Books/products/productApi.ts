import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOfferProduct: builder.query({
      query: () => "/api/listing/get?offer=true&limit=4",
    }),
  }),
});

export const { useGetOfferProductQuery } = productApi;
