import { Button } from "antd";
import PHform from "../../../components/from/PHform";
import PHInput from "../../../components/from/PHInput";
import PHSelect from "../../../components/from/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constent/golbals";

const CreateStudents = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <PHform onSubmit={onSubmit}>
      <PHInput name="firstName" type="text" label="First Name"></PHInput>
      <PHInput name="middleName" type="text" label="Middle Name"></PHInput>
      <PHInput name="lastName" type="text" label="Last Name"></PHInput>
     <PHSelect options={genderOptions} name="gender" label="Gender"></PHSelect>
      <PHInput name="email" type="emil" label="Email"></PHInput>
      <PHInput name="dateOfBarth" type="Date" label="Date Of Barth"></PHInput>
      <PHSelect
        options={bloodGroupOptions}
        name="bloodGroup"
        label="Blood Group"
      ></PHSelect>
      <Button htmlType="submit">Submit</Button>
    </PHform>
  );
};

export default CreateStudents;
