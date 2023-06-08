import React, { createContext } from 'react'
import { AuthProviderProps } from './ducks/types'
import { useProviderAuth } from '../../hooks'

interface AuthContextType {
  signIn: any
  signOut: any
  session: any
}

export const AuthContext = createContext<AuthContextType>({
  signIn: null,
  signOut: null,
  session: {},
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const methods = useProviderAuth()
  return <AuthContext.Provider value={methods}>{children}</AuthContext.Provider>
}
