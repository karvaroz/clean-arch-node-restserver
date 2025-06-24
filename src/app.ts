import dotenv from 'dotenv';
import { Server } from './presentation/server';
import { Router } from 'express';

dotenv.config();

const port = Number(process.env.PORT) || 3000;


async function main() {
  const routes = Router();
  const server = new Server({ port, routes });

  server.use((req, res, next) => {
    console.log(`📥 Request: ${req.method} ${req.url}`);
    next();
  });

  await server.start();
}

main().catch((err) => {
  console.error('❌ Error starting server:', err);
  process.exit(1);
});
