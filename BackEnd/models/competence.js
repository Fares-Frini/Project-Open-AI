const db =require("../config/db")
class competence{


    static async getcompetence()
    {
        return new Promise ((resolve,reject) =>{


            db.query("Select * from competence",[],(error,result)=>
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

module.exports=competence