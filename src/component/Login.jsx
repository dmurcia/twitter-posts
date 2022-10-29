import { loginWithGithub } from '../firebase/client'

const Login = () => {
  return (
    <div>
      <h3>Login with Google</h3>
      <button onClick={loginWithGithub}>GitHub</button>
    </div>
  )
}

export default Login
