import {UsersController} from "../controllers/users.controller";

export class Routes {
    public usersController: UsersController = new UsersController();

    public routes(app): void {
        app.route("/users/authenticate").post(this.usersController.login);
    }
}

