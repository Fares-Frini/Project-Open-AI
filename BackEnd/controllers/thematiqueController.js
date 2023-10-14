const thematique=require("../models/thematique")

class thematiqueController
{

    static async getallthematique(req,res)
    {
        var results = await thematique.getthematique();
    
        res.send(results);
         
    }
}

module.exports=thematiqueController