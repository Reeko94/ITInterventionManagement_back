import {UsersController} from "../controllers/users.controller";
import {CustomersController} from "../controllers/customers.controller";

export class Routes {
    public usersController: UsersController = new UsersController();
    public customerController: CustomersController = new CustomersController();

    public routes(app): void {
        app.route("/users/authenticate").post(this.usersController.login);

        app.route("/customer").post(this.customerController.addNewCustomer);
    }
}

