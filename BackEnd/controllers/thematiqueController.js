const thematique=require("../models/thematique")

class thematiqueController
{

    static async getallthematique(req,res)
    {
        var results = await thematique.getthematique();
    
        res.send(results);
         
    }

    static async addnewthematique(req,res)
    {
        var name = req.body.name
        var x=await thematique.thematiqueadd(name)
        if (x==true) {
            res.send("add thematique sucessfully")
        } else {
            res.send("add thematique failed")
        }
    }

    static async deletethematique(req,res)
    {
        const id=req.body.id;

        if (id) {
            var rsult=await thematique.deletethematique(id);
            if (rsult) {
                res.send("delete done")
            } else {
                res.send("failed to delete")

            }
        }
    }
}

module.exports=thematiqueController