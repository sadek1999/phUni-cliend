import { createApi, fetchBaseQuery,  } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders:(Headers,{getState})=>{
    const token=(getState()as RootState ).auth.token;
    if(token){
      Headers.set('authorization',`${token}`)
    }
    return Headers;
  }
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,

  endpoints: () => ({}),
});
