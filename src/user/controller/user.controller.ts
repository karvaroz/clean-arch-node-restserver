import { Request, Response } from 'express';

export class UserController{

    getUsers(req: Request, res: Response): void {
        // Logic to get users
        res.send("List of users");
    }
}