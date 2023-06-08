"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../firebase");
const user_model_1 = require("../models/user.model");
const USERS_COLLECTION = 'users';
class UserController {
    async add(req, res, next) {
        try {
            const data = req.body;
            const userData = {
                ...data,
                createdAt: firestore_1.Timestamp.fromDate(new Date()),
            };
            const usersRef = (0, firestore_1.collection)(firebase_1.firebaseDb, USERS_COLLECTION);
            await (0, firestore_1.addDoc)(usersRef, userData);
            res.send(`Record saved successfuly`);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const id = req.params.id;
            const data = req.body;
            const userRef = (0, firestore_1.doc)(firebase_1.firebaseDb, USERS_COLLECTION, id);
            await (0, firestore_1.updateDoc)(userRef, data);
            res.send(`User record updated successfuly`);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const userRef = (0, firestore_1.doc)(firebase_1.firebaseDb, USERS_COLLECTION, id);
            await (0, firestore_1.deleteDoc)(userRef);
            res.status(204).send('Record deleted successfuly');
        }
        catch (error) {
            next(error);
        }
    }
    async getOne(req, res, next) {
        try {
            const id = req.params.id;
            const ref = (0, firestore_1.doc)(firebase_1.firebaseDb, USERS_COLLECTION, id);
            const snap = await (0, firestore_1.getDoc)(ref);
            const userData = snap.data();
            const userId = snap.id;
            // const { createdAt } = userData
            if (!snap.exists()) {
                res.status(404).send('User with the given ID not found');
            }
            else {
                res.json({
                    ...userData,
                    userId,
                    // createdAt: +createdAt.toDate()
                });
            }
        }
        catch (error) {
            next(error);
        }
    }
    async getAll(req, res, next) {
        try {
            const usersRef = (0, firestore_1.collection)(firebase_1.firebaseDb, USERS_COLLECTION);
            const users = await (0, firestore_1.getDocs)(usersRef);
            const usersArray = [];
            if (users.empty) {
                res.status(404).send('No student record found');
            }
            else {
                users.forEach((doc) => {
                    const user = new user_model_1.UserModel({
                        id: doc.id,
                        first: doc.data().first,
                        last: doc.data().last,
                        born: doc.data().born,
                        // createdAt: doc.data().createdAt,
                    });
                    usersArray.push(user);
                });
                res.send(usersArray);
            }
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = UserController;
