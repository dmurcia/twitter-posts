import { useState } from 'react'
import { User } from 'firebase/auth'
import { loginWithGithub, signOutGithub } from '../firebase/client'
import { store } from '../config'
import * as browserStorage from 'store'

const useProviderAuth = () => {
  const getSession = (): User => {
    return browserStorage.get(store.session)
  }
  const setSessionBrowserStorage = (user: User): boolean => {
    browserStorage.set(store.session, user)
    return true
  }

  const _auth = getSession()
  const [session, setSession] = useState<User | null>(_auth || null)

  const signIn = async (): Promise<boolean> => {
    try {
      const user: User = await loginWithGithub()
      setSession(user)
      setSessionBrowserStorage(user)
      return true
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const signOut = async (): Promise<void> => {
    try {
      await signOutGithub()
      setSession(null)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  return {
    signIn,
    signOut,
    session,
  }
}

export default useProviderAuth
