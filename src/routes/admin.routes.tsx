import {  ReactNode } from "react";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/createFaculty";
import CreateUser from "../pages/admin/CreateUser";
import Home from "../pages/Home";
import { NavLink } from "react-router-dom";


type TRoutes={
  path:string,
  element:ReactNode
}

type TSidebarItem={
  key:string,
  label:ReactNode,
  Children?:TSidebarItem[]
}




const adminPaths = [
  {
    name: "home",
    path: "home",
    element: <Home></Home>,
  },
  {
    name: "user Management",
    Children: [
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

export const adminSlider=adminPaths.reduce((acc:TSidebarItem[],item)=>{
  if(item.path && item.name){
    acc.push({
      key:item.name,
      label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
    })
  }
  if(item.Children){
    acc.push({
      key:item.name,
      label:item.name,
      Children:item.Children.map((child)=>({
        key:child.name,
        label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
      }))
    })
  }
  return acc;
},[])


export const adminRoutes=adminPaths.reduce((acc:TRoutes[],item)=>{
  if(item.path && item.element){
    acc.push({
      path:item.path,
      element:item.element
    })
  }

  if(item.Children){
    item.Children.forEach((child)=>{
      acc.push({
        path:child.path,
        element:child.element
      })
    })
  }
  return acc
},[])


