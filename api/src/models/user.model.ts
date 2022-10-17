import { User } from '../interfaces/User'

export class UserModel {
  constructor(user: User) {
    this.id = user.id
    this.first = user.first
    this.last = user.last
    this.born = user.born
    this.createdAt = user.createdAt
  }
}
