import {Request, Response} from "express";
import {Customer} from "../models";

export class CustomersController {
    public addNewCustomer(req: Request, res: Response) {
        Customer.create(req.body).then(customer => {
            res.status(201).json(customer)
        }).catch(err => {
            res.status(500).json(err);
        });
    }

    public getAllCustomers(req: Request, res: Response) {
        Customer.findAll().then(customers => {
            res.status(200).json(customers);
        }).catch(err => {
            res.status(500).json(err);
        })
    }
}
