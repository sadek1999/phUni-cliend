import { Layout, Menu} from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemGenerator } from "../../utils/sidebarItemsGenerator";
import { useAppSelector } from "../../redux/hooks";
import { CurrentUser } from "../../redux/features/auth/authSlice";


const {Sider}=Layout
const userRole={
    STUDENT:'student',
    FACULTY:"faculty",
    ADMIN:'admin'
}

const Sidebar = () => {
const user=useAppSelector(CurrentUser)

let sidebarItems
      switch ( user!.role) {
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
        <Sider style={{height:"100vh",position:"sticky",top:"0",left:"0"}}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
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