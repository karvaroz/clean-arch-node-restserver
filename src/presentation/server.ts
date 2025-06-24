import express, { Router, Express, RequestHandler } from 'express';


interface Options {
  port: number;
  routes: Router;
}

export class Server {
  public readonly app: Express;
  private readonly port: number;
  private readonly routes: Router;

  constructor({ port, routes }: Options) {
    this.app = express();
    this.port = port;
    this.routes = routes;

    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setupRoutes(): void {
    this.app.use(this.routes);
  }

  public use(middleware: RequestHandler): void {
    this.app.use(middleware);
  }

  public async start(): Promise<void> {
    try {
      this.app.listen(this.port, () => {
        console.log(`✅ Server running on http://localhost:${this.port}`);
      });
    } catch (error) {
      console.error('❌ Failed to start server:', error);
      process.exit(1);
    }
  }
}
