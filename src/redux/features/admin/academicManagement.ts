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
    addAcademicFaculty:builder.mutation({
      query:(data)=>({
        url:"/academic-faculty/academic-faculty",
        method:"POST",
        body:data
      })
    }),
    getAcademicFaculty:builder.query({
      query:()=>({
        url:"/academic-faculty",
        method:"GET"
      })
    }),
    addDepartment:builder.mutation({
      query:(data)=>({
        url:"/academic-department/create-academic-Department",
        method:"POST",
        body:data,
      })
    }),
    getDepartment:builder.query({
      query:()=>{
        return{
          url:"/academic-department",
          method:"GET",
          
        }
      }
    })

  }),
});

export const {
  useGetAcademicSemestersQuery,
  usePostAcademicSemestersMutation,
  useAddAcademicFacultyMutation,
  useGetAcademicFacultyQuery,
  useAddDepartmentMutation,
  useGetDepartmentQuery,
} = academicManagementApi;
