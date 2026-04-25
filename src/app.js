import express from 'express';
import cors from 'cors';
import flightRoutes from './modules/flights/flight.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { rateLimiter } from './middlewares/rateLimiter.middleware.js';

const app = express();

app.use(cors({ origin: '*', methods: ['GET'] }));
app.use(express.json());
app.use(rateLimiter);

app.use('/api/flights', flightRoutes);
app.use(errorMiddleware);

export default app;