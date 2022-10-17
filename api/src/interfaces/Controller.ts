import { Request, Response } from 'express'

export interface Controller {
  add(req: Request, res: Response): void
  update(req: Request, res: Response): void
  delete(req: Request, res: Response): void
  getOne(req: Request, res: Response): void
  getAll(req: Request, res: Response): void
}
