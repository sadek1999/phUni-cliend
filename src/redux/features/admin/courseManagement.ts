import { TQueryParams, TResponseRedux } from "../../../Types";
import { TCourse } from "../../../Types/coursManagemetnTypes";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/SemesterRegistration",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["semester"],
    }),
    addSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "/SemesterRegistration/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),
    getAllCourses: builder.query({
      query: (args) => {
        const params=new URLSearchParams()
        if(args){
            args.forEach((item :TQueryParams) => {
                params.append(item.name,item.value as string)
            });
        }
        return {
          url: "/corse/create-course",
          method:"GET",
          params:params,
          
        };
      },
      providesTags:['course'],
      transformResponse:(response:TResponseRedux<TCourse[]>)=>{
        return{
            data:response.data,
            meta:response.meta,
        }
      }
    }),
    addCourses:builder.mutation({
        query:(data)=>({
            url:"",
            method:"POST",
            body:data
        }),
        invalidatesTags:['course']
    })
  }),
});

export const {
  useGetAllRegisteredSemesterQuery,
  useAddSemesterRegistrationMutation,
  useAddCoursesMutation,
  useGetAllCoursesQuery,
} = courseManagementApi;
