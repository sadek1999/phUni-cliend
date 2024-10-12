import React from "react";
import PHform from "../../../components/from/PHform";
import PHInput from "../../../components/from/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/from/PHSelect";
import { type } from "./../../../redux/store";

const nameOptions = [
  {
    value: "01",
    label: "Summer",
  },
  {
    value: "02",
    label: "Spring",
  },
  {
    value: "03",
    label: "Fall",
  },
];
const CreateAcademicSemester = () => {
  const onsubmit = (data) => {
    const name = nameOptions[Number(data.name) - 1].label;
    const SemesterData={
        name,
        code:data.name
    }

    console.log(SemesterData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHform onSubmit={onsubmit}>
          <PHSelect name="name" options={nameOptions} label={"name"}></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>{" "}
    </Flex>
  );
};

export default CreateAcademicSemester;
