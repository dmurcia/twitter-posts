import { Navigate } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'
import { routes } from '../config'

export function PrivateRoute({ children }) {
  const auth = useAuth()
  if (!auth.user) {
    return <Navigate to={routes.login} replace />
  }
  return children
}
