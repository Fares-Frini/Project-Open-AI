const express=require('express'); 
const nvetudecontroller = require("../controllers/nvetudeController")
const router = require('express').Router();


router.get("/nvetude",nvetudecontroller.getallnvetude);

router.get("/thematique",thematiquecontroller,getallthematique);

router.get("/competence",competencecontroller,getallcompetence);

router.get("/souscompetence",souscompetencecontroller,getallsouscompetence);

module.exports=router