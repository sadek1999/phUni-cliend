

import Home from "../pages/Home";

import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import RegisteredSemester from "../pages/admin/courseManagement/RegisteredSemester";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import Courses from "../pages/admin/courseManagement/Courses";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import OfferedCourse from "../pages/admin/courseManagement/OfferedCourse";
import CreateStudents from "../pages/admin/userManagement/CreateStudents";
import StudentData from "../pages/admin/userManagement/StudentData";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import StudentUpdate from "../pages/admin/userManagement/StudentUpdate";

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
  },{
    name:"Course Management",
    children:[
      {
        name:"Semester Registration",
        path:"semesterRegistration",
        element:<SemesterRegistration/>
      },
      {
        name:"Registered Semester",
        path:"registeredSemester",
        element:<RegisteredSemester/>
      },
      {
        name:"Create Course",
        path:"createCourse",
        element:<CreateCourse/>
      },
      {
        name:" Courses",
        path:"courses",
        element:<Courses/>
      },
      {
        name:" Offer Course",
        path:"OfferCourse",
        element:<OfferCourse/>
      },
      {
        name:" Offered Course",
        path:"OfferedCourse",
        element:<OfferedCourse/>
      },
    ]
  },

  {
    name: "user Management",
    children: [
      {
        name: "Create Student",
        path: "createStudent",
        element: <CreateStudents/>,
      },
      {
        name: "Student Details",
        path: "studentDetails",
        element: <StudentData/>,
      },
      {
        name: "Update Student",
        path: "updateStudent",
        element: <StudentUpdate/>,
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
