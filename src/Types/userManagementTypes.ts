import { TUser } from "../redux/features/auth/authSlice"
import { TAcademicSemester } from "./academicSemesterTypes"

export type TStudent= {
    _id: string
    id: string
    user: TUser
    name: TName
    gender: string
    email: string
    dateOfBarth: string
    bloodGroup: string
    contactNO: string
    EmergencyContactNo: string
    presentAddress: string
    permanentAddress: string
    guardian: TGuardian
    localGuardian: TLocalGuardian
    profileImg: string
    admissionSemester: TAcademicSemester
    academicDepartment: any
    isDeleted: boolean
    fullName: string
  }

  export type TFaculty= {
    _id: string
    id: string
    user: string
    designation: string
    name: TName
    gender: string
    dateOfBirth: string
    email: string
    contactNo: string
    emergencyContactNo: string
    bloodGroup: string
    presentAddress: string
    permanentAddress: string
    profileImg: string
    academicDepartment: any
    isDeleted: boolean
  }
  

  
  export type TName ={
    firstName: string
    middleName: string
    lastName: string
    _id: string
  }
  
  export type TGuardian ={
    fatherName: string
    fatherContact: string
    fatherOccupation: string
    motherName: string
    motherContact: string
    motherOccupation: string
    _id: string
  }
  
  export type TLocalGuardian = {
    name: string
    address: string
    contact: string
    _id: string
  }
  
  
  