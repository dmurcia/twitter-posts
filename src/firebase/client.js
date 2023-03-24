// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signOut, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import { firebaseConfig } from './config'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const onAuthStateChanged = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user)
      } else {
        resolve(null)
      }
    })
  })
}

export const loginWithGithub = () => {
  return new Promise((resolve, reject) => {
    const githubProvider = new GithubAuthProvider()

    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        if (token) {
          globalThis.localStorage.setItem('@token', token)
        }
        // The signed-in user info.
        resolve(result.user)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error)
        console.log('error :>> ', errorCode, errorMessage, email, credential)
        // ...
      })
  })
}

export const signOutGithub = () => {
  return new Promise((resolve) => {
    signOut(auth)
      .then(() => {
        globalThis.localStorage.removeItem('@token')
        resolve()
      })
      .catch((error) => {
        throw new Error(`Sign out failed ${error}`)
      })
  })
}
