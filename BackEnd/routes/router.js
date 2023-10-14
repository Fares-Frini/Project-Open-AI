const express=require('express'); 
const nvetudecontroller = require("../controllers/nvetudeController")
const thematiquecontroller = require("../controllers/thematiqueController")
const competencecontroller = require("../controllers/competenceController")
const souscompetencecontroller = require("../controllers/souscompetenceController")
const router = require('express').Router();


router.get("/nvetude",nvetudecontroller.getallnvetude);
router.post("/nvetudeadd",nvetudecontroller.addnewnvetude);
router.delete("/nvetudedelete",nvetudecontroller.deletenvetude);
//router.put("/nvetudeupdate",nvetudecontroller.updatenvetude);

router.get("/thematique",thematiquecontroller.getallthematique);
router.post("/thematiqueadd",thematiquecontroller.addnewthematique);
router.delete("/thematiquedelete",thematiquecontroller.deletethematique);
//router.put("/thematiqueupdate",thematiquecontroller.updatethematique);

router.get("/competence",competencecontroller.getallcompetence);
router.post("/competenceadd",competencecontroller.addnewcompetence);
router.delete("/competencedelete",competencecontroller.deletecompetence);
router.put("/competenceupdate",competencecontroller.updatecompetence);

router.get("/souscompetence",souscompetencecontroller.getallsouscompetence);
router.post("/souscompetenceadd",souscompetencecontroller.addnewsouscompetence);
router.delete("/souscompetencedelete",souscompetencecontroller.deletesouscompetence);
//router.put("/souscompetenceupdate",souscompetencecontroller.updatesouscompetence);

module.exports=router