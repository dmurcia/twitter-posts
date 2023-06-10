import { useState, useEffect, useCallback } from 'react'
import { User } from 'firebase/auth'
import { loginWithGithub, signOutGithub } from '../firebase/client'
import { store } from '../config'
import * as browserStorage from 'store'

const getSession = (): User => browserStorage.get(store.session)
const setSessionBrowserStorage = (user: User) => browserStorage.set(store.session, user)
const deleteSessionBrowserStorage = () => browserStorage.remove(store.session)

const useProviderAuth = () => {
  const [session, setSession] = useState<User | null>()

  const signIn = useCallback(async () => {
    try {
      const user: User = await loginWithGithub()
      setSession(user)
      setSessionBrowserStorage(user)
    } catch (error: any) {
      throw new Error(error)
    }
  }, [setSession, setSessionBrowserStorage])

  const signOut = useCallback(async () => {
    console.log('signOut')
    try {
      await signOutGithub()
      deleteSessionBrowserStorage()
      setSession(null)
    } catch (error: any) {
      throw new Error(error)
    }
  }, [setSession])

  useEffect(() => {
    setSession(getSession)
  }, [])

  return {
    signIn,
    signOut,
    session,
  }
}

export default useProviderAuth
