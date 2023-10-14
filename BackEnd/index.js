const express = require('express')
var cors = require('cors');
const mydb=require('./config/db')
const app =express();
const rout =require("./routes/router")
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(rout)
app.use(cors())
app.listen(3001,()=>{
    console.log('server is running');
})