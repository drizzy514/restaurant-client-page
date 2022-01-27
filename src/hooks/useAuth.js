import { useContext, useEffect } from "react";
import { Authentication } from "../context/Authentication";

function useAuth (set){
        const { token, setToken } = useContext(Authentication);
        useEffect( ()=> {
            setToken(window.localStorage.getItem("token"))
        })
        return set ? [setToken] : [token, setToken]
} 
export default useAuth