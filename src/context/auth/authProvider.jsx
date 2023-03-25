// import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useState } from 'react'
import { loginWithGithub, signOutGithub } from 'src/firebase/client'
import { store } from 'src/config'
import browserStorage from 'store'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const methods = useProvideAuth()
  return <AuthContext.Provider value={methods}>{children}</AuthContext.Provider>
}

function useProvideAuth() {
  const getSession = () => {
    return browserStorage.get(store.session)
  }
  const setSessionBrowserStorage = (token) => {
    browserStorage.set(store.session, token)
    return true
  }

  const _auth = getSession()
  const [session, setSession] = useState(_auth || '')

  const signIn = async () => {
    try {
      const user = await loginWithGithub()
      setSession(user)
      setSessionBrowserStorage(user)
      return true
    } catch (error) {
      throw new Error(error)
    }
  }

  const signOut = async () => {
    try {
      await signOutGithub()
      setSession(false)
    } catch (error) {
      return error
    }
  }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setSession(user)
  //     setSessionBrowserStorage(user)
  //   })
  //   // Cleanup subscription on unmount
  //   return () => unsubscribe()
  // }, [])

  return {
    signIn,
    signOut,
    session,
  }
}
