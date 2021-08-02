const { expect } = require('chai')
const app = require('../app')

const request = require('supertest')
const { conn, syncAndSeed, models: { Actor, Movie, Role }} = require('../db')

describe('testing routes', ()=>{
  it('GET home route', async ()=>{
    const response = await request(app).get('/')
    expect( response.status ).to.equal(200)
  })
  it('/movies', async()=>{
    const movies = await request(app).get('/movies')
   console.log('------->Movies',movies)
    expect(movies.body.length).to.equal(4)
  })
})

describe('testing database', ()=>{
  beforeEach( async ()=>{ await syncAndSeed() })

  it('Actor Model', async ()=>{
    const leo = await Actor.create({
      name: 'Leo'
    })
    expect(leo.name).to.equal('Leo')
  })
})