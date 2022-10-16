import express from 'express'
import cors from 'cors'
import * as bodyParser from 'body-parser'

import { usersRouter } from './routes/users.routes'
import { authRouter } from './routes/auth.routes'
import { authMiddleware } from './middlewares/auth.middleware'

class App {
  public app: express.Application
  public port: string

  constructor(port: string) {
    this.app = express()
    this.port = port

    this.initSettings()
    this.initMiddlewares()

    this.initRouters()
  }

  private initSettings() {
    this.app.set('port', this.port)
  }

  private initMiddlewares() {
    this.app.use(authMiddleware)
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(bodyParser.json())
  }

  private initRouters() {
    this.app.use('/api/users', usersRouter)
    this.app.use('/login', authRouter)
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }
}

export default App
