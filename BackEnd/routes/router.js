const express=require('express'); 
const nvetudecontroller = require("../controllers/nvetudeController")
const router = require('express').Router();


router.get("/nvetude",nvetudecontroller.getallnvetude);

router.get("/thematique",(req,res,next)=>{
    res.send("thematique")
})

router.get("/competence",(req,res,next)=>{
    res.send("competence")
})

router.get("/souscompetence",(req,res,next)=>{
    res.send("souscompetence")
})

module.exports=router