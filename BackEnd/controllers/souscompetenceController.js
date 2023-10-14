const souscompetence=require("../models/souscompetence")

class souscompetenceController
{

    static async getallsouscompetence(req,res)
    {
        var results = await souscompetence.getsouscompetence();
    
        res.send(results);
         
    }

    static async addnewsouscompetence(req,res)
    {
        var name = req.body.name
        var x=await souscompetence.souscompetenceadd(name)
        if (x==true) {
            res.send("add souscompetence sucessfully")
        } else {
            res.send("add souscompetence failed")
        }
    }

    static async deletesouscompetence(req,res)
    {
        const id=req.body.id;

        if (id) {
            var rsult=await souscompetence.deletesouscompetence(id);
            if (rsult) {
                res.send("delete done")
            } else {
                res.send("failed to delete")

            }
        }
    }
}

module.exports=souscompetenceController