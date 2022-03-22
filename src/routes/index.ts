import express from 'express'
import resize from './api/resize'

const routes = express.Router()

routes.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Image resize API is waiting for your query'
  })
})

routes.use('/resize', resize)

export default routes
