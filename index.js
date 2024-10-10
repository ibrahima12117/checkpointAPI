const express =require('express');
 const app =express();
 const port=5000;
  require('dotenv').config()
require('./config/db')
const person = require('./route/routeperson')
 
 app.get('/', (req,res) =>{ 
res.send('hello world')
})
 
 app.use('/api',person)
 
 
 
 
 
 
app.listen(port , function() {
console.log(` Sever is runing on port ${port}`);
 })
