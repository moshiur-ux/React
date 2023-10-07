import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
  
    const {user,loading}=useAuth()


 ///we have to wait here

if(loading) return <h1 className="text-5xl">LOading</h1>


    if(!user)
    {
        return <Navigate to='/login'></Navigate>

    }
  
    return children;
       
       
};

export default PrivateRoute;