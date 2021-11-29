import { expect } from 'chai'
import request from 'supertest'

import express from 'express'
import palindromeRouter from '../routes/palindrome.routes'

const app = express()
app.use('/', palindromeRouter)

describe('Palindrome Routes', () => {
  describe('GET /iecho', () => {
    it('should response with an error if there is no text query', (done) => {
      request(app)
        .get('/iecho')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) {
            throw err
          }
          expect(res.body).to.have.property('text').equal('no text')
          done()
        })
    })
  })

  describe('GET /iecho?text={{ param }}', () => {
    const nonPalindrome = 'test'
    const palindrome = 'Lo sé, Dama de Sol.'

    it('should response with status 200, text param reversed and palindrome as false', (done) => {
      request(app)
        .get(`/iecho?text=${nonPalindrome}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            throw err
          }
          expect(res.body).to.have.property('text').equal('tset')
          expect(res.body).to.have.property('palindrome').equal(false)
          done()
        })
    })

    it('should response with status 200 text param reversed and palindrome as true', (done) => {
      request(app)
        .get(`/iecho?text=${palindrome}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            throw err
          }
          expect(res.body).to.have.property('text').equal('.loS ed amaD ,és oL')
          expect(res.body).to.have.property('palindrome').equal(true)
          done()
        })
    })
  })
})
