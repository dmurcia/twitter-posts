import { Request, Response } from 'express'
import { getAuth, signInWithRedirect } from 'firebase/auth'
import { provider } from '../auth'

const auth = getAuth()

export const loginWithGithub = async (_req: Request, res: Response) => {
  try {
    const sign = await signInWithRedirect(auth, provider)
    res.status(200).json({ user: sign })
  } catch (error) {
    res.status(400).send(error)
  }
}
