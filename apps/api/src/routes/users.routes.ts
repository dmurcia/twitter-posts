import { Router } from 'express'
import UserController from '../controllers/users.controller'

export const usersRouter = Router()

const userControler = new UserController()

usersRouter.route('/').get(userControler.getAll).post(userControler.add)

usersRouter.route('/:id').get(userControler.getOne).put(userControler.update).delete(userControler.delete)
