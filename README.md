# Live site: https://phonebook-backend-fyuu.onrender.com

Going through the Helsinki FullStackOpen curriculum/course, my project submission.

- It's a fullstack REST app hosted on Render. 
- I've made the front-end and back-end separately ultimately combining them together by building a production folder of the front-end using vite's built in 'npm run build' command.
- This gave us a production ready 'dist' folder which is then copied into the root of our backend folder.
- Render recommends that for setting PORT in our back-end we use: `const PORT = process.env.PORT || 3001` so it's either our standard port or their defined route
- We can just add, delete and create new phonebook entries.
