import { aggregateFlights } from '../services/aggregator.service.js';
import { normalizeFlights } from '../services/normalization.service.js';
import { success, error } from '../../../shared/response.js';

export const getFlights = async (req, res, next) => {
  try {
    const raw = await aggregateFlights(req.query);
    const normalized = normalizeFlights(raw);

    if (res.sendCachedResponse) await res.sendCachedResponse(normalized);

    return success(res, normalized);
  } catch (err) {
    next(err);
  }
};