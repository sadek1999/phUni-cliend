
import PHform from '../../../components/from/PHform';
import PHSelect from '../../../components/from/PHSelect';
import { monthOptions } from '../../../constent/golbals';
import { useGetAcademicFacultyQuery } from '../../../redux/features/admin/academicManagement';

const CreateAcademicDepartment = () => {
    const {data ,isLoading}=useGetAcademicFacultyQuery(undefined)
    console.log(isLoading)
    // console.log(data)
    console.log(data?.data)
    const facultyOptions=data?.data?.map(items=>({
       
        value:items._id,
        label:items.name
    }))
   
    
    const onSubmit=(data)=>{

    }

   
    console.log(facultyOptions)
    return (
       <div>
        <PHform onSubmit={onSubmit}>
            <PHSelect label='faculty' name='Academic Department' options={facultyOptions} ></PHSelect>
        </PHform>
       </div>
    );
};

export default CreateAcademicDepartment;