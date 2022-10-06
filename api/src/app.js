import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import config from './config.js'

import userRoutes from './routes/user-routes.js'

const app = express()

// Settings
app.set('port', config.port)

// Middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/api', userRoutes.routes)

export default app
