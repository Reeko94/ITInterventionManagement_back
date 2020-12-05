import {Request, Response} from "express";

export class CustomersController {
    public index(req: Request, res: Response) {
        res.json({
            message: 'Hello'
        });
    }
}
