
import { useGetAcademicSemestersQuery } from '../../../redux/features/academicSemester/academicSemesterApi';

const SemesterManagement = () => {
    const {data}=useGetAcademicSemestersQuery(undefined)
    console.log(data)
    return (
        <div>
            <h1>This is semesterManagement ........</h1>
            
        </div>
    );
};

export default SemesterManagement;