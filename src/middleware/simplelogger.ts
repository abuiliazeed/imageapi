import express from 'express'

const simplelogger = (req: express.Request, res: express.Response, next: () => void) => {
  console.log(`User visted ${req.url}.`)
  next()
}

export default simplelogger
