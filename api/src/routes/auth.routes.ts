import { Router } from 'express'
import { loginWithGithub } from '../controllers/auth.controller'

export const authRouter = Router()

authRouter.route('/').post(loginWithGithub)
