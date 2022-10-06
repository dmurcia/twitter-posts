// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import config from './config.js'

// Initialize Firebase
const app = initializeApp(config.firebaseConfig)
const db = getFirestore(app)

export default db
