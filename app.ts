import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import {Routes} from './config/routes';

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    private corsOptions: cors.CorsOptions = {
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'X-Access-Token',
        ],
        credentials: true,
        methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
        origin: 'http://localhost:4200',
        preflightContinue: false,
    }

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(cors(this.corsOptions));
    }
}

export default new App().app;
