import {CustomersController} from "../controllers/customers.controller";

export class Routes {
    public customerController: CustomersController = new CustomersController();

    public routes(app): void {
        app.route("/").get(this.customerController.index);
    }
}
