import express from 'express'
import routes from './routes'
import * as dotenv from 'dotenv'

dotenv.config()

//create express instance
const app = express()

//adding port info for local host and for deployment
const PORT = process.env.PORT || 3000

//using the index routes url mapper we created for routing
app.use('/', routes)

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
