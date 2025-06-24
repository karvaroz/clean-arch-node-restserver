import { BaseRouter } from "../shared/router/router";
import { UserController } from "./controller/user.controller";


export class UserRouter extends BaseRouter<UserController> {

    constructor() {
        super(UserController);
    }

    routes(): void {
        this.router.get("/users", (req, res) => this.controller.getUsers(req, res));
    }

}