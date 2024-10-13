import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicSemesters: builder.query({
      query: () => ({
        url: "academic-semesters",
        method: "GET",
      }),
    }),
    postAcademicSemesters: builder.mutation({
      query: (data) => ({
        url: "academic-semesters/create-semesters",
        method: "POST",
        body:data
      }),
    }),
  }),
});

export const { useGetAcademicSemestersQuery,usePostAcademicSemestersMutation } = academicManagementApi;
