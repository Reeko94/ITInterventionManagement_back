import {Request, Response} from "express";
import {User} from "../models";

export class UsersController {
    public async login(req: Request, res: Response) {
        const user = await User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        });
        if(user) {
            res.json(user);
        } else {
            res.send("User not found");
        }
        console.log(user);
    }
}
