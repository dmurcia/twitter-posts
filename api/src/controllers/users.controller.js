import { addDoc, collection } from 'firebase/firestore'
import db from '../db.js'
import User from '../models/User.js'

export const addUser = async (req, res, next) => {
  try {
    const data = req.body
    await addDoc(collection(db, 'users'), data)
    res.send(`Record saved successfuly ${data}`)
  } catch (error) {
    res.status(400).send(error.message)
  }
}
