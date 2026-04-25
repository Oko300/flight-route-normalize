import express from 'express';
import { getFlights } from './controllers/flight.controller.js';
import { validateFlightQuery } from './validators/flight.validator.js';
import { cacheMiddleware } from '../../middlewares/cache.middleware.js';

const router = express.Router();

router.get('/', validateFlightQuery, cacheMiddleware, getFlights);

export default router;