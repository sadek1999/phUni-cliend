
import { TResponseRedux } from "../../../Types";
import { TAcademicSemester } from "../../../Types/academicSemesterTypes";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicSemesters: builder.query({
      query: () => ({
        url: "academic-semesters",
        method: "GET",
      }),
      transformResponse:(response:TResponseRedux<TAcademicSemester[]>)=>{
        // console.log(response)

        return{
          data:response.data,
          meta:response.meta,
        }

      }
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
