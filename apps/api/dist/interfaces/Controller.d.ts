import { NextFunction, Request, Response } from 'express';
export interface Controller {
    add(req: Request, res: Response, next: NextFunction): void;
    update(req: Request, res: Response, next: NextFunction): void;
    delete(req: Request, res: Response, next: NextFunction): void;
    getOne(req: Request, res: Response, next: NextFunction): void;
    getAll(req: Request, res: Response, next: NextFunction): void;
}
//# sourceMappingURL=Controller.d.ts.map