import express from 'express'
import cors from 'cors'
import * as bodyParser from 'body-parser'

import { usersRouter } from './routes/users.routes'
import { authMiddleware, errorMiddleware } from './middlewares/auth.middleware'

class App {
  public app: express.Application
  public port: number

  constructor(port: number) {
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
    this.app.use(errorMiddleware)
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(bodyParser.json())
  }

  private initRouters() {
    this.app.use('/api/', (_, res) => {
      res.send("yes");
    })
    this.app.use('/api/users', usersRouter)
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }
}

export default App
