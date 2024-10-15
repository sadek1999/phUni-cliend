import { TQueryParams, TResponseRedux } from "../../../Types";
import { TAcademicSemester } from "../../../Types/academicSemesterTypes";
import { baseApi } from "../../api/baseApi";



const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "academic-semesters",
          method: "GET",
          params:params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        // console.log(response)

        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    postAcademicSemesters: builder.mutation({
      query: (data) => ({
        url: "academic-semesters/create-semesters",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAcademicSemestersQuery,
  usePostAcademicSemestersMutation,
} = academicManagementApi;
