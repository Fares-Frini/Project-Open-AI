const db =require("../config/db")
class souscompetence{


    static async getsouscompetence()
    {
        return new Promise ((resolve,reject) =>{


            db.query("Select * from souscompetence",[],(error,result)=>
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

module.exports=souscompetence