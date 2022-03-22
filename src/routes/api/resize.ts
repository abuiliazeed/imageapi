import express from 'express'

const resize = express.Router()

resize.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'to start resizing add your query'
  })
})

export default resize
