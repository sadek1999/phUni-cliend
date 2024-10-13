import React from "react";
import { Form, Select, Space } from "antd";
import { Controller } from "react-hook-form";
import { Color } from "antd/es/color-picker";

type TPHSelect={
  label:string,
  name:string,
  options:{value:string,label:string ,disable?:boolean}[]
}

const PHSelect = ({ label, name ,options}:TPHSelect) => {
  return (
    <Controller
      name={name}
      render={({ field ,fieldState:{error}}) => (
        <Form.Item label={label}>
          <Select 
          size="large"
            style={{ width: "100%" }}
            {...field}
            options={options}
            
          />
          {error && <small style={{color:"red"}}>{error.message}</small>}
        </Form.Item>
        
      )}
    />
  );
};

export default PHSelect;
