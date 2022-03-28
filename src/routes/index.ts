import express from 'express'
import resize from './api/resize'

const routes = express.Router()

routes.use('/resize', resize)

//Udacity Review: Notice that i added a return type
routes.get('/', (req: express.Request, res: express.Response): void | Response => {
  res.json({
    message: 'to access the endpoint navigate to /resize'
  })
})

export default routes
