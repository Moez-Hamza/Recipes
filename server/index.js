const express = require("express");
const app = express();
const cors = require ('cors')
const fetch = require('isomorphic-fetch')
const mongoo = require('./db/mongoose')


app.use(express.json());
app.use(cors())



let port = 5000;

app.post('/api',(req,res)=>{
    mongoo.saveRecipe(req.body)
    res.send('Saved')
})

app.post('/api/d',(req,res)=>{
    mongoo.deleteRecipe(req.body.name)
})

app.get("/api",(req,res)=>{

        mongoo.getAllRecipes().then(data =>{
            res.send(data)
        })
       })

app.listen(port,()=>{
    console.log("listening on port 5000")
})