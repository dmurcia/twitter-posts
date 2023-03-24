// import { Navigate } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'

export function PrivateRoute({ children }) {
  const auth = useAuth()
  if (!auth.user) {
    // return <Navigate to='/login' replace />
  }
  return children
}
