import supertest from 'supertest'
import app from '../..'

const request = supertest(app)

//testing if the user added a wrong filename
describe('testing if the users added a wrong filename', () => {
  it('testing if the user added an image that the API dont have', async () => {
    request.get('/resize?filename=bear&width=200&height=200').expect(404)
  })
})

//testing if the user added all the correct parameters
describe('testing if the user added all the correct parameters', () => {
  it('testing if the user added all the correct parameters', async () => {
    request.get('/resize?filename=cat&width=200&height=200').expect(200)
  })
})

//testing all the cases related with the API parameters
describe('testing the resize API wrong parameters', () => {
  //testing if the user missed the filename parameter
  it('testing the resize route if missing the filename parameter ', async () => {
    request.get('/resize?width=200&height=200').expect(400)
  })

  //testing if the user missed the width parameter
  it('testing the resize route if missing the width parameter ', async () => {
    request.get('/resize?filename=cat&height=200').expect(400)
  })

  //testing if the user missed the height parameter
  it('testing the resize route if missing the height parameter ', async () => {
    request.get('/resize?filename=cat&width=200').expect(400)
  })

  //testing if the user added the filename including the extension
  it('testing the resize route if wrong filename parameter ', async () => {
    request.get('/resize?filename=cat.jpg&width=200&height=200').expect(400)
  })
})
