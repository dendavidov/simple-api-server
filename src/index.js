// @flow

import 'babel-polyfill';
import app from './app';
import logger from './logger';

const protocol = process.env.PROTOCOL || 'http';
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 8080;

try {
  app.listen({ port }, (): void => {
    logger.info(
      '==> 🌎  Server is up at %s://%s:%s ===',
      protocol,
      hostname,
      port
    );
  });
} catch (error) {
  logger.error(error.stack || error);
}
