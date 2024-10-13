
import { BaseQueryApi } from '@reduxjs/toolkit/query';
import { baseApi } from './../redux/api/baseApi';
export type TErr= {
    statusCode: number
  }

export type TErrorSource= {
    path: string
    message: string
  }

 export type TError={
    data:{
        success: boolean
        message: string
        errorSources: TErrorSource[]
        err: TErr
        stack: string
    }
    status:number;
 }

 export type TMeta={
    page: number
    limit: number
    total: number
    totalPage: number
 }
  
  export type TResponse<T>={
    data?:T;
    error?:TError;
    meta?:TMeta;
    success:boolean;
    message:string;

  }
  export type TResponseRedux<T>=TResponse<T> & BaseQueryApi
  
 