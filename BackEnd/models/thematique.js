const db =require("../config/db")
class thematique{


    static async getthematique()
    {
        return new Promise ((resolve,reject) =>{


            db.query("Select * from thematique",[],(error,result)=>
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

module.exports=thematique