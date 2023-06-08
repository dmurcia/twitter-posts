import { NextFunction, Request, Response } from 'express';
import { Controller } from '../interfaces/Controller';
export default class UserController implements Controller {
    add(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    delete(req: Request, res: Response, next: NextFunction): Promise<void>;
    getOne(req: Request, res: Response, next: NextFunction): Promise<void>;
    getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=users.controller.d.ts.map