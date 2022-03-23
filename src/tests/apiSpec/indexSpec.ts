import supertest from 'supertest'
import app from '../../index'

const request = supertest(app)

describe('testing the resize image API response', () => {
  it('testing the response of the resize API', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})
