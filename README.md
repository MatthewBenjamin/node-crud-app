# node-crud-app

## info
  This app is a simple full stack CRUD app built with node.js, Express, and
  mongoDB. It allows anyone to post, edit, and delete any message on the main
  page. At the moment, there is no user authorization or validation for form
  inputs.

## requirements
  [node.js](https://nodejs.org)

  [mongoDB](https://www.mongodb.com)

  [npm](https://www.npmjs.com)

## deployment to locahost
1. After downloading, create a folder named 'data' in the main project
directory.

  ```
  mkdir [path-to-project-directory]/data
  ```

2. Still in main project folder, run:

  ```
  npm install
  ```

3. Setup MongoDB for 'localhost:27017/node-crud-app', start your mongo server:

   ```
   mongod --dbpath ~/[path-to-project-directory]/data
   ```

   meanwhile, in the mongo console, enter:

   ```
   use node-crud-app
   ```


4. To start the server, enter:

    ```
    npm start
    ```

   Navigate to localhost:3000

## additional resources
This app is an adaptation of the project from the following tutorial:
[blog.udemy.com/node-js-tutorial](https://blog.udemy.com/node-js-tutorial/)
