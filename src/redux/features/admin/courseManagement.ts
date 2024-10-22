import { TQueryParams } from "../../../Types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemester: builder.query({
      query: (args) => {

        const params=new URLSearchParams()
        if (args) {
            args.forEach((item: TQueryParams) => {
              params.append(item.name, item.value as string);
            });
          }

        return {
            url:"/",
            method:"GET",
            params:params,

        };
      },
    }),
  }),
});

export const {} = courseManagementApi;
