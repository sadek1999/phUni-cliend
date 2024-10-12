import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/createFaculty";
import CreateUser from "../pages/admin/CreateUser";
import Home from "../pages/Home";

import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";

export const adminPaths = [
  {
    name: "home",
    path: "home",
    element: <Home></Home>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name:"Create A. Semester",
        path:"createAcademicSemester",
        element:<CreateAcademicSemester/>
      },
      {
        name:"Academic Semester",
        path:"AcademicSemester",
        element:<AcademicSemester/>
      },
      {
        name:" Create A Faculty",
        path:"createAcademicFaculty",
        element:<CreateAcademicFaculty/>
      },
      {
        name:" Academic Faculty",
        path:"AcademicFaculty",
        element:<AcademicFaculty/>
      },
      {
        name:"Create A Department ",
        path:"createAcademicDepartment",
        element:<CreateAcademicDepartment/>
      },
      {
        name:"Academic Department ",
        path:"AcademicDepartment",
        element:<AcademicDepartment/>
      },
      
    ],
  },

  {
    name: "user Management",
    children: [
      {
        name: "create-user",
        path: "createUser",
        element: <CreateUser/>,
      },
      {
        name: "create-Admin",
        path: "createAdmin",
        element: <CreateAdmin/>,
      },
      {
        name: "create-Faculty",
        path: "createFaculty",
        element: <CreateFaculty/>,
      },
    ],
  },
];
