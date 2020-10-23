const bodyParser = require('body-parser');
const express = require('express');
const app=express();
const home = require('./Routes/home');
const search = require('./Routes/search');

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,MATCH,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/api/songs',home);
app.get('/api/search/songs',search);

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
  console.log('port is started on ' +PORT);
})