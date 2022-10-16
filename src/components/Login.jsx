import React from 'react'
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import { auth } from '../firebase'

export const Login = () => {
  const gitHubProvider = new GithubAuthProvider()

  gitHubProvider.setCustomParameters({
    allow_signup: 'false',
  })

  const gitHubLogin = async () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        if (token) {
          localStorage.setItem('@token', token)
        }

        // The signed-in user info.
        // const user = result.user
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return (
    <div>
      <h3>Login with Google</h3>
      <button onClick={gitHubLogin} className="login-button">
        GitHub
      </button>
    </div>
  )
}

export default Login
