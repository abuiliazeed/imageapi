import express from 'express'

const resize = express.Router()

resize.get('/', (req: express.Request, res: express.Response) => {
  res.send('add querys')
})

export default resize
