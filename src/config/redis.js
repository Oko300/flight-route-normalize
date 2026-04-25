import { createClient } from 'redis';
import { ENV } from './env.js';
import logger from '../shared/logger.js';

const client = createClient({ url: ENV.REDIS_URL });

client.on('error', (err) => logger.error('Redis error:', err));

await client.connect();
export default client;