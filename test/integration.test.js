const assert = require('assert');
const request = require('supertest');
const app = require('../service-a/server'); // Adjust the path as necessary

describe('Integration Test', () => {
    it('should call Service A and return a valid response', (done) => {
        request(app)
            .post('/process')
            .send({ data: 'Hello, Service B!' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                
                assert.strictEqual(res.body.message, 'Received data: Hello, Service B!');
                done();
            });
    });
});
