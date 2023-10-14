const competence=require("../models/competence")

class competenceController
{

    static async getallcompetence(req,res)
    {
        var results = await competence.getcompetence();
    
        res.send(results);
         
    }

    static async addnewcompetence(req,res)
    {
        var name = req.body.name
        var x=await competence.competenceadd(name)
        if (x==true) {
            res.send("add competence sucessfully")
        } else {
            res.send("add competence failed")
        }
    }

    static async deletecompetence(req,res)
    {
        const id=req.body.id;

        if (id) {
            var rsult=await competence.deletecompetence(id);
            if (rsult) {
                res.send("delete done")
            } else {
                res.send("failed to delete")

            }
        }
    }

    static async updatecompetence(req,res)
    {
        const id=req.body.id;
        const name=req.body.name;
        var result =await competence.updatecompetence(id,name);
        if (result) {
            res.send("Update competence done")
        } else {
           res.send("Update Failed") 
        }
    }
}

module.exports=competenceController