import logger from '../shared/logger.js';

export const errorMiddleware = (err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ success: false, message: err.message });
};