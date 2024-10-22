import { Button, Col, Flex } from "antd";
import PHform from "../../../components/from/PHform";
import PHSelect from "../../../components/from/PHSelect";

import { useAddDepartmentMutation, useGetAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement";
import PHInput from "../../../components/from/PHInput";
import { toast } from "sonner";
import { TResponse } from "../../../Types";

const CreateAcademicDepartment = () => {
  const { data, isLoading } = useGetAcademicFacultyQuery(undefined);
  const [addAcademicDepartment]=useAddDepartmentMutation()
  // console.log(isLoading);
  // console.log(data)
  // console.log(data?.data);
  const facultyOptions = data?.data?.map((items) => ({
    value: items._id,
    label: items.name,
  }));

  const onSubmit =async (data:any) => {
    console.log(data);
   const academicDepartmentData={
      name:`Department Of ${data.name}`,
      academicFaculty:data.academicFaculty
    }

    try{
      const res= await addAcademicDepartment(academicDepartmentData) as TResponse<any> ;
      if(res.error){
        
        toast.error(res?.error?.data?.errorSources[0].message)
      }
      else{
        toast.success("Successfully create semester")
      }
      console.log(res)
      
    }catch(err){

    }
    
  };


  return (
    <Flex align="center" justify="center">

   
    <Col span={7} >
      <PHform onSubmit={onSubmit}>
        <PHSelect
          label="Academic Faculty"
          name="academicFaculty"
          options={facultyOptions}
        ></PHSelect>
        <PHInput type="text" label="Name of Department" name="name"></PHInput>
        <Button htmlType="submit">Submit</Button>
      </PHform>
    </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
