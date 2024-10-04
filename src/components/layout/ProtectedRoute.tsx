import  { ReactNode } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { CurrentToken } from '../../redux/features/auth/authSlice';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}:{children:ReactNode}) => {

    const token=useAppSelector(CurrentToken)
    if(!token){
        return <Navigate  to={"/login"}></Navigate>
    }
    return children
};

export default ProtectedRoute;