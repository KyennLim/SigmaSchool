import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";


export default function RequireAuth({ children }){
    const token = useContext(AuthContext).token

    if (!token){
        return <Navigate to ="/login" replace />
    }
    return children
}