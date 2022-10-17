import { NextFunction, Request, Response } from 'express'
import * as firebaseAdmin from 'firebase-admin'
import config from '../../config'

firebaseAdmin.initializeApp(config.firebaseConfig)

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const headerToken = req.headers.authorization
  if (!headerToken) {
    return res.send({ message: 'No token provided' }).status(401)
  }

  if (headerToken && headerToken.split(' ')[0] !== 'Bearer') {
    res.send({ message: 'Invalid token' }).status(401)
  }

  const token = headerToken.split(' ')[1]

  try {
    const appCheckClaims = await firebaseAdmin.appCheck().verifyToken(token)
    return next()
  } catch (error) {
    res.json({ message: 'Could not authorize' }).status(403)
  }
}
