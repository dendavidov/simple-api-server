import Koa from 'koa';

import middlewares from './middlewares';

const app = new Koa();

middlewares.errorLayer(app);
middlewares.apiLayer(app);

export default app;
