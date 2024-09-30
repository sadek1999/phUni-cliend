import { Layout, Menu} from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemGenerator } from "../../utils/sidebarItemsGenerator";


const {Sider}=Layout
const userRole={
    STUDENT:'student',
    FACULTY:"faculty",
    ADMIN:'admin'
}

const Sidebar = () => {
const role='admin'
let sidebarItems
      switch (role) {
        case userRole.ADMIN:
            sidebarItems=sidebarItemGenerator(adminPaths,userRole.ADMIN)
            
            break;
        case userRole.STUDENT:
            sidebarItems=sidebarItemGenerator(adminPaths,userRole.STUDENT)
            
            break;
        case userRole.FACULTY:
            sidebarItems=sidebarItemGenerator(adminPaths,userRole.FACULTY)
            
            break;
      
        default:
            break;
      }

    return (
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
          items={sidebarItems}
        />
      </Sider>
    );
};

export default Sidebar;