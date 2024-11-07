import { Button, Col, Divider, Row } from "antd";
import PHform from "../../../components/from/PHform";
import PHInput from "../../../components/from/PHInput";
import PHSelect from "../../../components/from/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constent/golbals";


const CreateStudents = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Row justify={"center"}>
      <Col span={24}>
        <PHform onSubmit={onSubmit}>
          <Divider>Personal Information </Divider>
          <Row gutter={8}>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="firstName"
                type="text"
                label="First Name"
              ></PHInput>
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="middleName"
                type="text"
                label="Middle Name"
              ></PHInput>
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput name="lastName" type="text" label="Last Name"></PHInput>
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHSelect
                options={genderOptions}
                name="gender"
                label="Gender"
              ></PHSelect>
            </Col>
            
            
            <Col span={24} md={12} lg={8}>
            <PHInput
            name="dateOfBarth"
            type="Date"
            label="Date Of Barth"
          ></PHInput>
            </Col>
            <Col span={24} md={12} lg={8}>
            <PHSelect
            options={bloodGroupOptions}
            name="bloodGroup"
            label="Blood Group"
          ></PHSelect>
            </Col>
          
           
            
            
           
          </Row>
          <Divider>Contact Information</Divider>
          <Row gutter={8} >
          <Col span={24} md={12} lg={8}>
            <PHInput name="email" type="emil" label="Email"></PHInput>
            </Col>
          <Col span={24} md={12} lg={8}>
            <PHInput name='contact' type='text' label="Contact"></PHInput>
            </Col>
            <Col span={24} md={12} lg={8}>
            <PHInput name='emergencyContact' type='text' label="Emergency Contact"></PHInput>
            </Col>
            <Col span={24} md={12} lg={8}>
            <PHInput name='presentAddress' type='text' label="Present Address"></PHInput>
            </Col>
            <Col span={24} md={12} lg={8}>
            <PHInput name='permanentAddress' type='text' label="Permanent Address"></PHInput>
            </Col>
            <Col span={24} md={12} lg={8}>
            <PHInput name='profileImg' type='url' label="Profile Image"></PHInput>
            </Col>
          </Row>
          <Divider>Guardian information</Divider>
         <Row gutter={8}>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name='fathersName' label="Fathers Name"></PHInput>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name='fathersContact' label="Fathers Contact"></PHInput>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name='fathersOccupation' label="Fathers Occupation"></PHInput>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name='mothersName' label="Mothers Name"></PHInput>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name='MothersContact' label="Mothers Contact"></PHInput>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name='mothersOccupation' label="Mothers Occupation"></PHInput>
          </Col>

         </Row>

         <Divider>Local Guardian</Divider>
         <Row gutter={8}>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="name" label="Name"></PHInput>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="address" label="Address"></PHInput>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="contact" label="Contact"></PHInput>
          </Col>

         </Row>
        
          
          
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Row>
  );
};

export default CreateStudents;
