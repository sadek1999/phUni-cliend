import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/rotueGenerator";
import Login from "../pages/Login";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // children:adminRoutes
  },
  {
    path:"/admin",
    element:<App></App>,
    children:routesGenerator(adminPaths)
  },
  {
    path:"/login",
    element:<Login></Login>
  }
]);
