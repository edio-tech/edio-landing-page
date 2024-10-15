import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const RequireAdmin = () => 
{
    const { auth, loading } = useAuth();

    if(loading)
    {
        return <></>;
    }

    return auth?.role === 'ADMIN' || auth?.role === 'CREATOR' ? <Outlet /> : <Navigate to={'/login'} />;
}
export default RequireAdmin;
