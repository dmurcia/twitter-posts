import express from 'express'
import { addUser } from '../controllers/users.controller.js'

const router = express.Router()

router.post('/user', addUser)

export default {
  routes: router,
}
