import React from "react";
import { Form, Select, Space } from "antd";
import { Controller } from "react-hook-form";

type TPHSelect={
  label:string,
  name:string,
  options:{value:string,label:string ,disable?:boolean}[]
}

const PHSelect = ({ label, name ,options}:TPHSelect) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select 
          size="large"
            style={{ width: "100%" }}
            {...field}
            options={options}
            
          />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
