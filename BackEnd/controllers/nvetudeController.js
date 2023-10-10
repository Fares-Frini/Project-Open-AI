const nvetude=require("../models/nvetude")

class nvetudeController
{

    static async getallnvetude(req,res)
    {
        var results = await nvetude.getnvetude();
    
        res.send(results);
         
    }
}

module.exports=nvetudeController