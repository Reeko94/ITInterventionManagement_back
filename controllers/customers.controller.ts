import {Request, Response} from "express";
import {Customer} from "../models";

export class CustomersController {
    public async addNewCustomer(req: Request, res: Response) {
        Customer.create(req.body).then(customer => {
            res.status(201).json(customer)
        }).catch(err => {
            res.status(500).json(err);
        });
    }
}
