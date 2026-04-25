import redisClient from '../config/redis.js';

export const rateLimiter = async (req, res, next) => {
  const ip = req.ip;
  const key = `rate:${ip}`;
  const limit = 30; // requests per minute

  const current = await redisClient.incr(key);
  if (current === 1) await redisClient.expire(key, 60);

  if (current > limit) {
    return res.status(429).json({ success: false, message: 'Too many requests' });
  }

  next();
};