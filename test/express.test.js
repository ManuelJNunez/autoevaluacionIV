const request = require('supertest')
const app = require('../express/miniapi')
const chai = require('chai')

const expect = chai.expect;

describe('PUT /saluda/:nombre', function() {
  it('should change the name', function (done) {
    request(app)
      .put('/saluda/Paco')
      .expect('Content-Type', /text/)
      .expect(200,done);
  })
})

describe('GET /', function() {
  it('should responds with json', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body.message).to.be.equal('Funciona :D')
        return done()
      })
  })
})

describe('GET /status', function() {
  it('should responds Healthy', function(done) {
    request(app)
      .get('/status')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.body.status).to.be.equal('Healthy')
        return done()
      })
  })
})

describe('GET /saluda', function() {
  it('should responds Healthy', function(done) {
    request(app)
      .get('/saluda')
      .expect(200)
      .expect('Content-Type', /text/)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.text).to.match(/Hola, (\w*)/)
        return done()
      })
  })
})
