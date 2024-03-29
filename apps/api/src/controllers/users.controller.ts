import { NextFunction, Request, Response } from 'express'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, Timestamp } from 'firebase/firestore'
import { firebaseDb } from '../firebase'
import { UserModel } from '../models/user.model'
import { Controller } from '../interfaces/Controller'
import { User } from 'src/interfaces/User'

const USERS_COLLECTION = 'users'
export default class UserController implements Controller {
  public async add(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const userData = {
        ...data,
        createdAt: Timestamp.fromDate(new Date()),
      }
      const usersRef = collection(firebaseDb, USERS_COLLECTION)
      await addDoc(usersRef, userData)
      res.send(`Record saved successfuly`)
    } catch (error: any) {
      next(error)
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      const data = req.body
      const userRef = doc(firebaseDb, USERS_COLLECTION, id)
      await updateDoc(userRef, data)
      res.send(`User record updated successfuly`)
    } catch (error: any) {
      next(error)
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      const userRef = doc(firebaseDb, USERS_COLLECTION, id)
      await deleteDoc(userRef)
      res.status(204).send('Record deleted successfuly')
    } catch (error: any) {
      next(error)
    }
  }

  public async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      const ref = doc(firebaseDb, USERS_COLLECTION, id)
      const snap = await getDoc(ref)
      const userData = snap.data()
      const userId = snap.id
      // const { createdAt } = userData
      if (!snap.exists()) {
        res.status(404).send('User with the given ID not found')
      } else {
        res.json({
          ...userData,
          userId,
          // createdAt: +createdAt.toDate()
        })
      }
    } catch (error: any) {
      next(error)
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const usersRef = collection(firebaseDb, USERS_COLLECTION)
      const users = await getDocs(usersRef)
      const usersArray: User[] = []
      if (users.empty) {
        res.status(404).send('No student record found')
      } else {
        users.forEach((doc) => {
          const user = new UserModel({
            id: doc.id,
            first: doc.data().first,
            last: doc.data().last,
            born: doc.data().born,
            // createdAt: doc.data().createdAt,
          })
          usersArray.push(user)
        })
        res.send(usersArray)
      }
    } catch (error: any) {
      next(error)
    }
  }
}
