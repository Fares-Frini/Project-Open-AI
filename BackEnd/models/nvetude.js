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
    static async nvetudeadd(name)
    {
        return new Promise(resolve=>
            {
                db.query("insert into nv_etude (name) values (?)",[name],(e,r)=>
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

    static async deletenvetude(id)
    {
        return new Promise(resolve=>
            {
                db.query("delete from nv_etude where id=?",[id],(error,result)=>
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

module.exports=nvetude