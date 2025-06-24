import dotenv from "dotenv";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config();

class Server {
    public app: express.Application = express();
    private port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());

        // this.app.use("/api", this.routers());

        this.listen()

    }

    routers(): Array<express.Router> {
        return [

        ];
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

new Server();