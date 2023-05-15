import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
//  CHILDREN REFERS TO IMMEDIATE SUB COMPONENT(SharedLayout) 
  const { user } = useAppContext();
  // IF NO USER IS LOGGED IN - REDIRECT TO THE LANDING PAGE
  if(!user) {
    return <Navigate to="/landing" />
  }
  return (
    children
  )
}
export default ProtectedRoute;