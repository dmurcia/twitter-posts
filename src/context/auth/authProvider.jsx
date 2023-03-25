import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { auth, loginWithGithub, signOutGithub } from 'src/firebase/client'
import { routes } from 'src/config'
import browserStorage from 'store'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const values = useProvideAuth()
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

function useProvideAuth() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const signIn = async () => {
    try {
      const user = await loginWithGithub()
      browserStorage.set('userData', user)
      setUser(user)
      navigate(routes.home)
    } catch (error) {
      throw new Error(error)
    }
  }

  const signOut = async () => {
    try {
      await signOutGithub()
      setUser(false)
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  return {
    user,
    signIn,
    signOut,
  }
}
