import { typeChecker, fileChecker, imageResizer } from '../../utils/handler'
import path from 'path'

const file = `${path.resolve('./')}/package.json`

//Testing the Utility function we have created
describe('testing the utility functions we created', () => {
  //Udacity Review: Testing the ImageResizer function in isolation from the API
  describe('testing the imageResizer function ', () => {
    it('should get the resized image as per provided width and height', async () => {
      const filename = 'cat'
      const width = 100
      const height = 100
      const imageDirectory = path.resolve('./') + '/images/'
      const outputDirectory = imageDirectory + 'cache/'
      const targetImage = `${imageDirectory}${filename}.jpg`
      const outputImage = outputDirectory + `${filename}-cache-${width}x${height}.jpg`

      await imageResizer(targetImage, outputImage, Number(width), Number(height))

      expect(outputImage).toBeTruthy()
    })
  })

  //Testing the fileChecker Function
  describe('testing the fileChecker function ', () => {
    it('testing the fileChecker function with missing file', () => {
      expect(fileChecker('invalid path')).toBeFalsy()
    })
    it('testing the fileChecker function with existing file', () => {
      expect(fileChecker(file)).toBeTruthy()
    })
  })

  //Testing the TypeChecker Function
  describe('testing the typeChecker function', () => {
    it('testing the typeCheck function with wrong filename', () => {
      expect(typeChecker('cat.jpg')).toBeTruthy()
    })
    it('testing the typeChecker function with correct filename', () => {
      expect(typeChecker('cat')).toBeFalsy()
    })
  })
})
