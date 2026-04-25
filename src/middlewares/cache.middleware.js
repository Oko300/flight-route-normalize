import redisClient from '../config/redis.js';
import { CACHE_KEYS } from '../shared/constants.js';
import { API_CONFIG } from '../config/api.config.js';

export const cacheMiddleware = async (req, res, next) => {
  const key = CACHE_KEYS.FLIGHTS(req.query);
  const cached = await redisClient.get(key);

  if (cached) {
    return res.status(200).json({ success: true, cached: true, data: JSON.parse(cached) });
  }

  res.sendCachedResponse = async (data) => {
    await redisClient.setEx(key, API_CONFIG.CACHE_TTL, JSON.stringify(data));
  };

  next();
};