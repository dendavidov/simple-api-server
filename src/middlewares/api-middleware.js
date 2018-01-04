import Router from 'koa-router';
import cors from 'koa-cors';
import apiController from '../controllers/api-controller';
import Config from '../config';

const API_PREFIX = Config.apiPrefix;

const apiLayer = app => {
  app.use(cors());

  const router = new Router();

  router.get(`${API_PREFIX}`, apiController.getIndex);

  router.get(`${API_PREFIX}foo`, apiController.getFooList);

  app.use(router.routes());

  return app;
};

export default apiLayer;
