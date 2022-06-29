const express = require("express");
const app = express();
const cors = require ('cors')
const mongoo = require('./db/mongoose');
const { response } = require("express");


app.use(express.json());
app.use(cors())



let port = 5000;

app.post('/api',(req,res)=>{
    mongoo.saveRecipe(req.body)
    res.send()
})

app.delete('/api/:id',(req,res)=>{
    mongoo.deleteRecipe(req.params.id).then(data => {res.send(data)})
})

app.post('/api/search',(req,res)=>{
    mongoo.searchRecipe(req.body.name).then(data=>{
        res.send(data)
    })
})

app.put('/api/:id',(req,res)=>{
    let data = {id:req.params.id,name:req.body.name, ingredients:req.body.recipe,image_url:req.body.image,sort:req.body.sort}
    mongoo.updateRecipe(data).then(response =>{
        res.send(response)
    })
 
})


app.get("/api",(req,res)=>{
        mongoo.getAllRecipes().then(data =>{
            res.send(data)
    })
})

app.listen(port,()=>{
    console.log("listening on port 5000")
})