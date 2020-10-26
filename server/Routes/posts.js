const express = require('express');
const router=express.Router();

let data=[
    {
    id:'1',
    items:[],
    name:'London',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeexmC73RvuOHEl4xTDWQFnikrHo4AWFyoPw&usqp=CAU",
     
    }
];
router.get('/api/playlists',(req,res,next)=>{
    res.send(data)
})

router.post('/api/playlists',(req,res,next)=>{
    const {name,img}=req.body;
    const file ={
        id:Math.random(),
        items:[],
        name:name,
        img:img ? img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeexmC73RvuOHEl4xTDWQFnikrHo4AWFyoPw&usqp=CAU",
    };
    data.shift(file);
    res.status(201).send(file);
  });
module.exports=router;