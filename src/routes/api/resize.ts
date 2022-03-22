import express from 'express'
import path from 'path'
import { imageResizer, typeChecker, fileChecker, dirCreator } from '../../utils/handler'

const resize = express.Router()

resize.get('/', async (req: express.Request, res: express.Response) => {
  const { filename, width, height } = req.query
  const imageDirectory = path.resolve('./') + '/images'
  const outputDirectory = imageDirectory + 'cache/'
  const targetImage = `${imageDirectory}${filename}.jpg`

  if (Object.keys(req.query).length === 0) {
    return res
      .status(200)
      .send(
        'to use the image resizer API construct your query as follows filename (images available: cat, dog, duck),width,height'
      )
  }

  if (!filename || !width || !height || isNaN(Number(height))) {
    return res
      .status(400)
      .send('error missing parameters please follow the API documentations in /')
  }
})

export default resize
