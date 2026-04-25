import app from './app.js';
import { ENV } from './config/env.js';
import logger from './shared/logger.js';

app.listen(ENV.PORT, () => {
  logger.info(`Server running on port ${ENV.PORT}`);
});