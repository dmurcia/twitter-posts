"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    id;
    first;
    last;
    born;
    // createdAt: Timestamp
    constructor(user) {
        this.id = user.id;
        this.first = user.first;
        this.last = user.last;
        this.born = user.born;
        // this.createdAt = user.createdAt
    }
}
exports.UserModel = UserModel;
