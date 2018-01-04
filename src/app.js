// @flow

import Koa from 'koa';
import type Application from 'koa';

import middlewares from './middlewares';

const app: Application = new Koa();

middlewares.errorLayer(app);
middlewares.apiLayer(app);

export default app;
