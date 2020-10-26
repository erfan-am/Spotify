const {Router} = require('express');
const router=Router();
let data=[
  {
    name:'london',
    id:'0.3',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeexmC73RvuOHEl4xTDWQFnikrHo4AWFyoPw&usqp=CAU",
    items:[]
  }
];
router.get('/api/playlists',(req,res,next)=>{
  res.status(200).send(data)
})

router.post('/api/playlists',(req,res,next)=>{
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
router.delete('/api/playlists/:id', (req, res) => {
  const file = Number(req.params.id);
  const existFile = data.filter((account) => account.id != file);
  if (!existFile) {
    res.status(500).send('Account not found.');
  } else {
    data = existFile;
    res.send(data);
  }
});
module.exports=router