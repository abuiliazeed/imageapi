import express from 'express'
import { query, validationResult } from 'express-validator'

import path from 'path'
import { imageResizer, typeChecker, fileChecker, dirCreator } from '../../utils/handler'

const resize = express.Router()

resize.get(
  '/',
  query('filename').isString(),
  query('width').isNumeric(),
  query('height').isNumeric(),
  // Udacity Review: Notice that i added the return type to the function below
  async (req: express.Request, res: express.Response): Promise<void | express.Response> => {
    const errors = validationResult(req)
    const { filename, width, height } = req.query
    const imageDirectory = path.resolve('./') + '/images/'
    const outputDirectory = imageDirectory + 'cache/'
    const targetImage = `${imageDirectory}${filename}.jpg`

    // Udacity Review: Notice that i return the errors in the case of the validation errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    if (Object.keys(req.query).length === 0) {
      return res
        .status(200)
        .json(
          'to use the image resizer API construct your query as follows  filename (images available: cat, dog, duck),width,height for example ?filename=cat&width=100&height=100'
        )
    }

    if (!fileChecker(targetImage)) {
      return res.status(404).json('image not found please choose availble image stated in /')
    }

    if (!fileChecker(outputDirectory)) {
      dirCreator(outputDirectory)
    }

    const outputImage = outputDirectory + `${filename}-cache-${width}x${height}.jpg`
    if (fileChecker(outputImage)) {
      res.sendFile(outputImage)
    } else {
      await imageResizer(targetImage, outputImage, Number(width), Number(height))
      res.sendFile(outputImage)
    }
  }
)

export default resize
