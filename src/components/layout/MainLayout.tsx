import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import { adminSlider } from "../../routes/admin.routes";

const { Header, Content, Footer, Sider } = Layout;
const MainLayout = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Dashboard",
    },
    {
      key: "2",
      label: "profile",
    },
    {
      key: "3",
      label: "user Management",
      children: [
        { key: "11", label: "create admin" },
        { key: "12", label: "create Student" },
        { key: "13", label: "create Faculty" },
      ],
    },
  ];
  // console.log(adminSlider)
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
          }}
        >
          <h1>PH Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSlider}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
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
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
