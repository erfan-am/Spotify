const bodyParser = require('body-parser');
const express = require('express');
const  post  = require('./Routes/posts');
const app=express();
const home = require('./Routes/home');
const search = require('./Routes/search');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,MATCH,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.get('/api/songs',home);
app.get('/api/search/songs',search);
app.use(post)

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
  console.log('port is started on ' +PORT);
})