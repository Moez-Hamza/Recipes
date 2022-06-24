const express = require("express");
const app = express();
const cors = require ('cors')

app.use(express.json());
app.use(cors())



let port = 5000;

app.get("/api",(req,res)=>{
    res.json({"recipe":'miam'})
})

app.listen(port,()=>{
    console.log("listening on port 5000")
})