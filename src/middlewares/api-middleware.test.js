import supertest from 'supertest';
import packageJson from '../../package.json';

import app from '../app';

describe('index', () => {
  let server;

  beforeAll(() => {
    server = app.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should return 200', async () => {
    const response = await supertest(server).get('/api/v1');
    expect(response.status).toEqual(200);
  });

  it('should return application/json', async () => {
    const response = await supertest(server).get('/api/v1');
    expect(response.type).toEqual('application/json');
  });

  it('should return correct body.data', async () => {
    const response = await supertest(server).get('/api/v1');
    const { name, version } = packageJson;
    expect(response.body.data).toEqual({ name, version });
  });
});
