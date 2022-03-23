import { typeChecker, fileChecker } from '../../utils/handler'
import path from 'path'

const file = `${path.resolve('./')}/package.json`

//Testing the Utility function we have created
describe('testing the utility functions we created', () => {
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
