const souscompetence=require("../models/souscompetence")

class souscompetenceController
{

    static async getallsouscompetence(req,res)
    {
        var results = await souscompetence.getsouscompetence();
    
        res.send(results);
         
    }
}

module.exports=souscompetenceController