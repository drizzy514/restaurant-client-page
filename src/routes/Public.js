import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";



function Public (props){
    const [token] = useAuth()
    console.log(token)
    const { pathname } = useLocation();
    if ((token && pathname === "/login")){
        return <Redirect to="/admin"></Redirect>

    
    }
    return <Route {...props} />
    

}
export default Public