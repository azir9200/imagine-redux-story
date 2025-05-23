import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    // baseUrl:
    //   "https://better-manage-project-baf29mg6g-azir-uddins-projects.vercel.app",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      if (token) {
        headers.set("authorization", `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Orders"],
  endpoints: () => ({}),
});

// baseUrl: "http://localhost:5000",
// baseUrl: "https://better-manage-project.vercel.app",
