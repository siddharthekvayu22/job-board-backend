require('dotenv').config();
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const db = require('./db/db');

db.then(()=>{
    console.log('MongoDB connected');
}).catch((err)=>{
    console.log(err)
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
