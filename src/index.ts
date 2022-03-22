import express, { Application, Request, Response } from 'express'
import path from 'path'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))

//Serving homepage in public folder as a Static to express when visiting the main route
app.get('/', (req: Request, res: Response): void => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'))
})
// add routing for / path
app.get('/resize', (req: Request, res: Response) => {
  res.json({
    message: 'Image resize API is waiting for your query'
  })
})

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
