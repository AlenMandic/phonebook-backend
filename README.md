# Live site: https://phonebook-backend-fyuu.onrender.com](https://kh5h73-3001.csb.app

- Fullstack app hosted on CodeSandbox. 
- I've made the front-end and back-end separately ultimately combining them together by building a production folder of the front-end using vite's 'npm run build' command.
- This gave us a production ready 'dist' folder which is then copied into the root of our backend folder.
- Tested the API using Postman
- Since we now have 1 repo instead of 2, we update our URL route to a 'base url'
- We can add, update, delete and read ( CRUD ) phonebook entries.
- Enabled mongoose validators for 'patch' methods like PUT, and added notification error/success handling for the front-end
- All data is stored on MongoDB
- Using Mongo Atlas and Mongoose ODM
