import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { loginUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";


const Login = () => {

  const dispatch=useAppDispatch()
 const {register,handleSubmit}=useForm({
  defaultValues:{
    id:"A-0001",
    password:'admin123'
  }
 })
 const[login,{error}]=useLoginMutation()
//  console.log(data)
//  console.log(error)

 const onSubmit= async(data)=>{
  // console.log(data)
  const userInfo={
    id:data.id,
    password:data.password
  }
   const result= await login(userInfo).unwrap()
   console.log(verifyToken(result.data.accessToken))
      // dispatch(loginUser({user:{},token:result.data.accessToken}))
   console.log(result)
 }

  
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
         <div>
          <label htmlFor="id" >ID:</label>
          <input type="text" id="id" {...register("id")}/>
         </div>
         <div>
          <label htmlFor="password" >Password:</label>
          <input type="text" id="password"  {...register("password")} />
         </div>
         <Button htmlType="submit">Submit</Button>
        </form>
    );
};

export default Login;