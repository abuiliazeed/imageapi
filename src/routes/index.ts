import express from 'express'
import resize from './api/resize'

const routes = express.Router()

routes.use('/resize', resize)

routes.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'to access the endpoint navigate to /resize'
  })
})

export default routes
