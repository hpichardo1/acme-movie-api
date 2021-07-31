const { expect } = require('chai')

const app = require('supertest')(require('../app'))

describe('testing', ()=>{
  it('GET route', async ()=>{
    const response = await app.get('/')
    expect( response.status ).to.equal(200)
  })
})