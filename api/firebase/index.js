"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseDb = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const config_1 = __importDefault(require("../config"));
// Initialize Firebase
const app = (0, app_1.initializeApp)(config_1.default.firebaseConfig);
exports.firebaseDb = (0, firestore_1.getFirestore)(app);
