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

    static async souscompetenceadd(name)
    {
        return new Promise(resolve=>
            {
                db.query("insert into souscompetence (name) values (?)",[name],(e,r)=>
                {
                    if(!e)
                    {
                        resolve(true)
                    }
                    else{
                        resolve(false)
                    }
                })
            })
    }

    static async deletesouscompetence(id)
    {
        return new Promise(resolve=>
            {
                db.query("delete from souscompetence where id=?",[id],(error,result)=>
                {
                    if (error) {
                        resolve(false)
                    }else
                    {
                        resolve(true)
                    }
                })
            })
    }
}

module.exports=souscompetence