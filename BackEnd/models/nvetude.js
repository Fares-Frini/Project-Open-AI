const db =require("../config/db")
class nvetude{


    static async getnvetude()
    {
        return new Promise ((resolve,reject) =>{


            db.query("Select * from nv_etude",[],(error,result)=>
            {
                if(!error)
                {
                resolve(result)
                }else
                {
                    reject(error);
                }
            })
        })
    }
}

module.exports=nvetude