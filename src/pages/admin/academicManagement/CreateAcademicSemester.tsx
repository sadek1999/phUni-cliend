
import PHform from "../../../components/from/PHform";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/from/PHSelect";

import { semesterOptions } from "../../../constent/semester";
import { monthOptions } from "../../../constent/golbals";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/academicSemesterSchema";
import { usePostAcademicSemestersMutation } from "../../../redux/features/admin/academicManagement";
import { toast } from "sonner";
import { TResponse } from "../../../Types/global";



const currentYear=new  Date().getFullYear();
const yearOptions=[0,1,2,3,4].map((number)=>({
    value:String(currentYear+number),
    label: String(currentYear+number),
}))

const CreateAcademicSemester = () => {
  
  const [addAcademicSemester]=usePostAcademicSemestersMutation();
   
  const onsubmit =async (data:any) => {
    // console.log(data)
    const name = semesterOptions[Number(data.name) - 1].label;
    const semesterData={
        name,
        code:data.name,
        year:data.year,
        startMonth:data.startMonth,
        endMonth:data.endMonth,

    }
// console.log(semesterData)
    try{

      const res= await addAcademicSemester(semesterData) as TResponse;
      if(res.error){
        
        toast.error(res?.error?.data?.errorSources[0].message)
      }
      else{
        toast.success("Successfully create semester")
      }
      
      console.log(res)


    }catch(error){
      console.log(error)
      toast.error("sumThink Want error")
    }

   
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHform 
        onSubmit={onsubmit}
       resolver={zodResolver(academicSemesterSchema)}

        >
          <PHSelect name="name" options={semesterOptions} label={"Name"}></PHSelect>
          <PHSelect name="year" options={yearOptions} label={"Year"}></PHSelect>
          <PHSelect name="startMonth" options={monthOptions} label={"StartMont"}></PHSelect>
          <PHSelect name="endMonth" options={monthOptions} label={"EndMonth"}></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
