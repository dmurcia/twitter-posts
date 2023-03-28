import { useContext } from 'react'
import { AuthContext } from '../context/auth/authProvider'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === null) {
    throw new Error('useAuth must be used within a AuthContext.Provider')
  }

  return context
}
