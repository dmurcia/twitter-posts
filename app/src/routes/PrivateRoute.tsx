import React from "react";
import { Navigate } from 'react-router-dom'
import { routes } from '../config'
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }: { children: JSX.Element[] }) => {
  const auth = useAuth()
  if (!auth.session) {
    return <Navigate to={routes.login} replace />
  }
  return children
}
export default PrivateRoute