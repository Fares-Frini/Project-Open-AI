const nvetude=require("../models/nvetude")

class nvetudeController
{

    static async getallnvetude(req,res)
    {
        var results = await nvetude.getnvetude();
        console.log(req.get("host"));
        res.send(results);
         
    }

    static async addnewnvetude(req,res)
    {
        var name = req.body.name
        var x=await nvetude.nvetudeadd(name)
        if (x==true) {
            res.send("add nvetude sucessfully")
        } else {
            res.send("add nvetude failed")
        }
    }

    static async deletenvetude(req,res)
    {
        const id=req.body.id;

        if (id) {
            var rsult=await nvetude.deletenvetude(id);
            if (rsult) {
                res.send("delete done")
            } else {
                res.send("failed to delete")

            }
        }
    }
}

module.exports=nvetudeController