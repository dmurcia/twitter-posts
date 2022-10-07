import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import db from '../db.js'
import User from '../models/User.js'

const USERS_COLLECTION = 'users'

export const addUser = async (req, res) => {
  try {
    const data = req.body
    const usersRef = collection(db, USERS_COLLECTION)
    await addDoc(usersRef, data)
    res.send(`Record saved successfuly ${data}`)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const usersRef = collection(db, USERS_COLLECTION)
    const users = await getDocs(usersRef)
    const usersArray = []
    if (users.empty) {
      res.status(404).send('No student record found')
    } else {
      users.forEach((doc) => {
        const user = new User(doc.id, doc.data().first, doc.data().last, doc.data().born)
        usersArray.push(user)
      })
      res.send(usersArray)
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const getUser = async (req, res) => {
  try {
    const id = req.params.id
    const userRef = doc(db, USERS_COLLECTION, id)
    const user = await getDoc(userRef)
    if (!user.exists()) {
      res.status(404).send('User with the given ID not found')
    } else {
      res.send(user.data())
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const userRef = doc(db, USERS_COLLECTION, id)
    await updateDoc(userRef, data)
    res.send(`User record updated successfuly ${data}`)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    const userRef = doc(db, USERS_COLLECTION, id)
    await deleteDoc(userRef)
    res.send('Record deleted successfuly')
  } catch (error) {
    res.status(400).send(error.message)
  }
}
