
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/createFaculty";
import CreateUser from "../pages/admin/CreateUser";
import Home from "../pages/Home";
import SemesterManagement from "../pages/admin/semesterManagemant/SemesterManagement";

export const adminPaths = [
  {
    name: "home",
    path: "home",
    element: <Home></Home>,
  },
  {
    name:"Semester Management",
    children:[
     { name:"Academic Semester",
      path:'academic-semester',
      element:<SemesterManagement></SemesterManagement>}
    ]
  },

  {
    name: "user Management",
    children: [
      {
        name: "create-user",
        path: "createUser",
        element: <CreateUser></CreateUser>,
      },
      {
        name: "create-Admin",
        path: "createAdmin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "create-Faculty",
        path: "createFaculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
];
