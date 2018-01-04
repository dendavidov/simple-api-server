import supertest from 'supertest';

import app from '../app';

describe('404', () => {
  let server;

  beforeAll(() => {
    server = app.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should return 404', async () => {
    const response = await supertest(server).get('/api/v1/not-found-page');
    expect(response.status).toEqual(404);
  });
});
