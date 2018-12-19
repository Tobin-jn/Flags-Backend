process.env.NODE_ENV = 'test'

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const expect = chai.expect
const config = require('../knexfile')['test']
const database = require('knex')(config)
chai.use(chaiHttp)

describe('Server file', () => {

    // beforeEach(() => database.migrate.rollback()
    //   .then(() => database.migrate.latest())
    //   .then(() => database.seed.run())
    // );
  

  
  })