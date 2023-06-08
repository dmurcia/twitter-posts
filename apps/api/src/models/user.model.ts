import { User } from '../interfaces/User'
import { Timestamp } from 'firebase/firestore'

export class UserModel {
  id: string
  first: string
  last: string
  born: string
  // createdAt: Timestamp

  constructor(user: User) {
    this.id = user.id
    this.first = user.first
    this.last = user.last
    this.born = user.born
    // this.createdAt = user.createdAt
  }
}
