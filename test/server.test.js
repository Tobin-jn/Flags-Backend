process.env.NODE_ENV = 'test'

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const expect = chai.expect
const config = require('../knexfile')['test']
const database = require('knex')(config)
chai.use(chaiHttp)

describe('Server file', () => {

    beforeEach(() => database.migrate.rollback()
      .then(() => database.migrate.latest())
      .then(() => database.seed.run())
    );

    describe('/api/v1/country', () => {
      
      it('should return return status of 200 on a get request', (done) => {
        chai.request(app)
          .get('/api/v1/country')
          .end((error, response) => {
            expect(response).to.have.status(200)
            done()
          })
      })

      it('should return a 404 for a route that does not exist', done => {
        chai.request(app)
        .get('/bologna')
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
      });

      it('should return an array of countries', (done) => {

        chai.request(app)
          .get('/api/v1/country')
          .end((error, response) => {
            expect(response.body[0]).to.be.a('object')
            expect(response.body[0]).to.have.property('name')
            expect(response.body[0]).to.have.property('flag')
            expect(response.body[2]).to.have.property('country_outline')
            done()
          })
      })
    })

    describe('/api/v1/country/:id', () => {
      
      it('should return return status of 200 on a get request', (done) => {
        chai.request(app)
          .get('/api/v1/country/1')
          .end((error, response) => {
            expect(response).to.have.status(200)
            done()
          })
      })

      it('should return a single country', (done) => {
        chai.request(app)
          .get('/api/v1/country/2')
          .end((error, response) => {
            expect(response.body[0]).to.be.a('object')
            expect(response.body[0]).to.have.property('name')
            expect(response.body[0]).to.have.property('flag')
            expect(response.body[0]).to.have.property('country_outline')
            done()
          })
      })
    })

    describe('/api/v1/facts', () => {
      
      it('should return return status of 200 on a get request', (done) => {
        chai.request(app)
          .get('/api/v1/facts')
          .end((error, response) => {
            expect(response).to.have.status(200)
            done()
          })
      })

      it('should return an array of facts', (done) => {

        chai.request(app)
          .get('/api/v1/facts')
          .end((error, response) => {
            expect(response.body[0]).to.be.a('object')
            expect(response.body[0]).to.have.property('country_fact')
            done()
          })
      })
    })

    describe('/api/v1/facts/:id', () => {
      
      it('should return return status of 200 on a get request', (done) => {
        chai.request(app)
          .get('/api/v1/facts/1')
          .end((error, response) => {
            expect(response).to.have.status(200)
            done()
          })
      })

      it('should return a 404 for a route that does not exist', done => {
        chai.request(app)
        .get('/tacotuesday')
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
      });

      it('should return a single fact', (done) => {
        chai.request(app)
          .get('/api/v1/facts/2')
          .end((error, response) => {
            expect(response.body[0]).to.be.a('object')
            expect(response.body[0]).to.have.property('country_fact')
            done()
          })
      })
    })

  })