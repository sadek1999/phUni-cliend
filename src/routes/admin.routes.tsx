import CreateUser from "../pages/admin/CreateUser";
import Home from "../pages/Home";

const adminPaths = [
  {
    name: "home",
    path: "/admin/home",
    element: <Home></Home>,
  },
  {
    name: "user Management",
    Children: [
      {
        name: "create-user",
        path: "/admin/createUser",
        element: <CreateUser></CreateUser>,
      },
    ],
  },
];
