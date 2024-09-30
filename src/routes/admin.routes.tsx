import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/createFaculty";
import CreateUser from "../pages/admin/CreateUser";
import Home from "../pages/Home";

export const adminPaths = [
  {
    name: "home",
    path: "home",
    element: <Home></Home>,
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
