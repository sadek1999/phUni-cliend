import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./admin.routes";
import Home from "../pages/Home";
import { Children } from 'react';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // children:adminRoutes
  },
  {
    path:"/admin",
    element:<App></App>,
    children:adminRoutes
  }
]);
