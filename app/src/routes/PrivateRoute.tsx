import { useAuth } from '@app/hooks'
import React from "react";
import { Navigate } from 'react-router-dom'
import { routes } from '../config'

interface PrivateProps {
  children: JSX.Element
}

const PrivateRoute: React.FC<PrivateProps> = ({ children }) => {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to={routes.login} replace />
  }
  return children
}
export default PrivateRoute