import { useAuth } from '../hooks'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { routes } from '../config'

interface PrivateProps {
  children: JSX.Element
}

const PrivateRoute: React.FC<PrivateProps> = ({ children }) => {
  const { session } = useAuth()
  if (!session) {
    return <Navigate to={routes.login} replace />
  }
  return children
}
export default PrivateRoute
