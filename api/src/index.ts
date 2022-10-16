import * as dotenv from 'dotenv'
import App from './app'

dotenv.config()

const app = new App(process.env.PORT)
app.listen()
