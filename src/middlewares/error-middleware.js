// @flow

import type Application, { Context } from 'koa';

import HTTPStatus from 'http-status';

const errorLayer = (app: Application): Application => {
  app.use(async (ctx: Context, next: () => Promise<void>): Promise<void> => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || HTTPStatus.INTERNAL_SERVER_ERROR;
      ctx.body = {
        success: false,
        message: err.message,
      };
      ctx.app.emit('error', err, ctx);
    }
  });
  return app;
};

export default errorLayer;
