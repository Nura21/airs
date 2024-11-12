// src/index.ts

import { Elysia } from 'elysia';
import pollutionRoutes from './routes/pollutionRoutes';

const app = new Elysia()
  .use(pollutionRoutes)
  .listen(3000);

console.log('Server running on http://localhost:3000');
