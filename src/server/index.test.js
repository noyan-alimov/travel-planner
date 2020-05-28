const request = require('supertest');
const app = require('./index');

describe('POST /touristAttractions ', () => {
  test('It should fetch tourist attractions and respond with an array of these attractions', async () => {
    const response = await request(app)
      .post('/touristAttractions')
      .send({
        results: [
          {
            name: 'London Eye',
            rating: 4.5
          },
          {
            name: 'Big Ben',
            rating: 4.4
          }
        ]
      });
    expect(response.statusCode).toEqual(200);
  });
});
