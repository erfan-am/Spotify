const express = require('express');
const data = require('../data/data');
const router =express.Router();


router.get('/api/songs',(req,res,next)=>{
    res.send(data)
})

module.exports=router