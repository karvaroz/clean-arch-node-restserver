import express from "express";
import morgan from "morgan";
import cors from "cors";

import { DataSource, DataSourceOptions } from "typeorm";

import { UserRouter } from "./user/user.router";
import { ConfigServer } from "./config/config";

class Server extends ConfigServer {
	public app: express.Application = express();
	private port: number = this.getNumberEnv("PORT") || 3000;
	private dataSource: DataSource | undefined;

	constructor() {
		super();

		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));

		this.dbConnect()
			.then((connection: DataSource) => {
				console.log(
					"Database connected successfully:",
					connection.isInitialized,
				);
			})
			.catch((error: Error) => {
				console.error("Database connection failed:", error);
			});

		this.app.use(morgan("dev"));
		this.app.use(cors());

		this.app.use("/api", this.routers());

		this.listen();
	}

	routers(): Array<express.Router> {
		return [new UserRouter().router];
	}

	public async dbConnect(): Promise<DataSource> {
		if (!this.dataSource) {
			this.dataSource = new DataSource(this.TypeORMConfig as DataSourceOptions);
			await this.dataSource.initialize();
		}
		return this.dataSource;
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}
}

new Server();
