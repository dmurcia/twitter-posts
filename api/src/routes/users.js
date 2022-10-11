import express from 'express'
import { addUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.controller.js'

const router = express.Router()

router.route('/').get(getAllUsers).post(addUser)

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

export default {
  routes: router,
}
