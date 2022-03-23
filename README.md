# Image Resize Web App
this image Resizing API will help you resize any image using Nodejs sharp package.

# Tech stack and dependency
I used node express to build the server i used Typescript for the development.
For the testing i used jasmine , i used nodemon during the development.
for the linting i used eslint for the formatting i used prettier.
i used sharp package to manipulate the images.

# Installation
- Download the repo
- run " npm install" to install all the dependency
- run " npm run test" to test the application
- run " npm run start" to start the app
- navigate to "localhost:3000/resize/?filename=cat&width=200&height=200" for example to test the API in action

# Deployment Heroku Server
For more convenience i deployed the api to heroku you can navigate to it from here
[Heroku Link](https://imageresizeapi.herokuapp.com/resize/?filename=cat&width=200&height=200)