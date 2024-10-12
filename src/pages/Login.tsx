import { Button, Row } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHform from './../components/from/PHform';
import PHInput from "../components/from/PHInput";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  

  const defaultValues={
    id: "A-0001",
      password: "admin123",
  }
  const [login] = useLoginMutation();


  const onSubmit = async (data: FieldValues) => {
    const tostId = toast.loading("loading data ....");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const result = await login(userInfo).unwrap();
      const user = verifyToken(result.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: result.data.accessToken }));
      toast.success("log in ", { id: tostId, duration: 2000 });
      navigate(`/${user.role}`);

      //  console.log(userData)
    } catch (error) {
      // console.log(error)
      toast.error(`SumThink went ${error}`, { id: tostId, duration: 2000 });
    }
 
  };

  return (
    <Row justify={'center'} align={'middle'} style={{height:'100vh'}}>
     
      <PHform onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput name={"id"} type={'text'} label="id"></PHInput>
        <PHInput name={"password"} type={'text'} label="password"></PHInput>
        <Button htmlType="submit">Submit</Button>
      </PHform>
     
    </Row>
  );
};

export default Login;
