import { useGetDepartmentQuery } from "../../../redux/features/admin/academicManagement";


const AcademicDepartment = () => {
   const {data}=useGetDepartmentQuery(undefined)
   console.log(data?.data)

    return (
        <div>
            <h1>Academic Department</h1>
        </div>
    );
};

export default AcademicDepartment;