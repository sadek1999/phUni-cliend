import React from "react";
import PHform from "../../../components/from/PHform";
import PHInput from "./../../../components/from/PHInput";
import { Button, Col, Flex } from "antd";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement";
import { toast } from "sonner";
import { TResponse } from "../../../Types";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await addAcademicFaculty(data) as TResponse;
      if(res.error){
        
        toast.error(res?.error?.data?.errorSources[0].message)
      }
      else{
        toast.success("Successfully create semester")
      }
      console.log(res);
    } catch (error) {}
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHform onSubmit={onSubmit}>
          <PHInput type="text" label="Academic Faculty" name="name"></PHInput>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
