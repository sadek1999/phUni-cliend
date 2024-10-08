import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logOutUser } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;
const MainLayout = () => {

  const dispatch = useAppDispatch();

  const handelLogout = () => {
    dispatch(logOutUser());
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header>
          <Button onClick={handelLogout}> Logout </Button>
        
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
            {/* <h1>This is main content ...........</h1> */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
