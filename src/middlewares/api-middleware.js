// @flow

import type Application from 'koa';

import Router from 'koa-router';
import cors from 'koa2-cors';
import apiController from '../controllers/api-controller';
import Config from '../config';

const API_PREFIX = Config.apiPrefix;

const apiLayer = (app: Application): Application => {
  app.use(cors());

  const router = new Router();

  router.get(`${API_PREFIX}`, apiController.getIndex);

  router.get(`${API_PREFIX}foo`, apiController.getFooList);

  app.use(router.routes());

  return app;
};

export default apiLayer;
