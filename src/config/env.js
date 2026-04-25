import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 3000,
  REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
  AVIATIONSTACK_API_KEY: process.env.AVIATIONSTACK_API_KEY,
};