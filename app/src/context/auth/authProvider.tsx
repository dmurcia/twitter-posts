import React from 'react'
import { AuthProviderProps } from './ducks/types'
import useProviderAuth from 'src/hooks/useProviderAuth'

interface AuthContextType {
  signIn: any
  signOut: any
  session: any
}

export const AuthContext = React.createContext<AuthContextType>({
  signIn: null,
  signOut: null,
  session: {}
});


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const methods = useProviderAuth()
  return <AuthContext.Provider value={methods}>{children}</AuthContext.Provider>
}
