import { GithubAuthProvider } from 'firebase/auth'

export const provider = new GithubAuthProvider()

provider.setCustomParameters({
  allow_signup: 'false',
})
