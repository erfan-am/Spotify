const bodyParser = require('body-parser');
const express = require('express');
// const  post  = require('./Routes/posts');
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


let data=[
  {
    name:'london',
    id:'0.3',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeexmC73RvuOHEl4xTDWQFnikrHo4AWFyoPw&usqp=CAU",
    items:[]
  }
];
app.get('/api/playlists',(req,res,next)=>{
  res.status(200).send(data)
})

app.post('/api/playlists',(req,res,next)=>{
  const {name}=req.body;
  const file ={
      id:Math.random().toString(),
      items:[],
      name:name,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeexmC73RvuOHEl4xTDWQFnikrHo4AWFyoPw&usqp=CAU",
  };
  data.push(file)
  res.status(201).send(file);
});
app.delete('/api/playlists/:id', (request, response) => {
  const accountId = Number(request.params.id);
  const newAccounts = data.filter((account) => account.id != accountId);
  if (!newAccounts) {
    response.status(500).send('Account not found.');
  } else {
    data = newAccounts;
    response.send(data);
  }
});

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
  console.log('port is started on ' +PORT);
})