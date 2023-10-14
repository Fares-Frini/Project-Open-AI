const competence=require("../models/competence")

class competenceController
{

    static async getallcompetence(req,res)
    {
        var results = await competence.getcompetence();
    
        res.send(results);
         
    }
}

module.exports=competenceController