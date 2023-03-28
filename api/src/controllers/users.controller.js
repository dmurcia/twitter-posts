"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../../firebase");
const user_model_1 = require("../models/user.model");
const USERS_COLLECTION = 'users';
class UserController {
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const userData = Object.assign(Object.assign({}, data), { createdAt: firestore_1.Timestamp.fromDate(new Date()) });
                const usersRef = (0, firestore_1.collection)(firebase_1.firebaseDb, USERS_COLLECTION);
                yield (0, firestore_1.addDoc)(usersRef, userData);
                res.send(`Record saved successfuly`);
            }
            catch (error) {
                let message = 'Unknown Error';
                if (error instanceof Error)
                    message = error.message;
                res.status(400).send(message);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = req.body;
                const userRef = (0, firestore_1.doc)(firebase_1.firebaseDb, USERS_COLLECTION, id);
                yield (0, firestore_1.updateDoc)(userRef, data);
                res.send(`User record updated successfuly`);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const userRef = (0, firestore_1.doc)(firebase_1.firebaseDb, USERS_COLLECTION, id);
                yield (0, firestore_1.deleteDoc)(userRef);
                res.send('Record deleted successfuly');
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const ref = (0, firestore_1.doc)(firebase_1.firebaseDb, USERS_COLLECTION, id);
                const snap = yield (0, firestore_1.getDoc)(ref);
                const userData = snap.data();
                const userId = snap.id;
                const { createdAt } = userData;
                if (!snap.exists()) {
                    res.status(404).send('User with the given ID not found');
                }
                else {
                    res.json(Object.assign(Object.assign({}, userData), { userId, createdAt: +createdAt.toDate() }));
                }
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersRef = (0, firestore_1.collection)(firebase_1.firebaseDb, USERS_COLLECTION);
                const users = yield (0, firestore_1.getDocs)(usersRef);
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
                            createdAt: doc.data().createdAt,
                        });
                        usersArray.push(user);
                    });
                    res.send(usersArray);
                }
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.default = UserController;
