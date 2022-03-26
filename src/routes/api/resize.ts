import express from 'express'
import path from 'path'
import { imageResizer, typeChecker, fileChecker, dirCreator } from '../../utils/handler'

const resize = express.Router()

resize.get('/', async (req: express.Request, res: express.Response) => {
  const { filename, width, height } = req.query
  const imageDirectory = path.resolve('./') + '/images/'
  const outputDirectory = imageDirectory + 'cache/'
  const targetImage = `${imageDirectory}${filename}.jpg`

  if (Object.keys(req.query).length === 0) {
    return res
      .status(200)
      .json(
        'to use the image resizer API construct your query as follows  filename (images available: cat, dog, duck),width,height for example ?filename=cat&width=100&height=100'
      )
  }
//file
  if (!filename) {
    return res
      .status(400)
      .json('Error: wrong filename please follow the API documentations in /')
  }
//width
  if (!width) {
    return res
      .status(400)
      .json('Error: wrong width please follow the API documentations in /')
  }
  //height
  if (!height || isNaN(Number(height))) {
    return res
      .status(400)
      .json('Error: wrong height please follow the API documentations in /')
  }

  if (typeChecker(String(filename))) {
    return res.status(400).json('remove the extension from the filename')
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
})

export default resize
