# Live site: https://phonebook-backend-fyuu.onrender.com

Going through the Helsinki FullStackOpen curriculum/course, my project submission.

- Fullstack app hosted on Render. 
- I've made the front-end and back-end separately ultimately combining them together by building a production folder of the front-end using vite's 'npm run build' command.
- This gave us a production ready 'dist' folder which is then copied into the root of our backend folder.
- Tested the API using Postman
- Since we now have 1 repo instead of 2, we update our URL route to a 'base url'
- Render recommends that for setting PORT in our back-end we use: `const PORT = process.env.PORT || 3001` so it's either our standard port or their defined route
- We can add,update, delete and read ( CRUD ) phonebook entries.
- All data is stored on MongoDB
- Using Mongo Atlas and Mongoose ODM