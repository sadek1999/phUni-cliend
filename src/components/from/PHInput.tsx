import { Controller } from "react-hook-form";


type TInputProps={
    type:string;
    name:string;
    label?:string;
}


const PHInput = ({type,name,label}:TInputProps) => {
    return (
        <div>
            {label?label:null}
            <Controller 
            name={name}
            render={({field})=><input {...field} type={type} id={name}></input>}/>
        </div>
    );
};

export default PHInput;