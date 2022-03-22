//importing sharp package will enable us to manipulate images
import sharp from 'sharp'

//importing existssync and mkdirsync from the fs library will enable us to check for the images
import { existsSync } from 'fs'
import { mkdirSync } from 'fs'

//following the sharp npm package documentation we will use it as follows
const imageResizer = async (
  filePath: string,
  outPath: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(filePath).resize(width, height).toFile(outPath)
}

//this function will check if the files doesn't include extension
const typeChecker = (fileName: string): boolean => {
  return fileName.includes('.jpg')
}

//this function will check if the file exist or not
const fileChecker = (imagePath: string): boolean => {
  return existsSync(imagePath)
}
// this function will create a directory
const dirCreator = (dirPath: string): void => {
  return mkdirSync(dirPath)
}

//we need to export the functions we created in order to be able to use them in our project
export default { imageResizer, typeChecker, fileChecker, dirCreator }
