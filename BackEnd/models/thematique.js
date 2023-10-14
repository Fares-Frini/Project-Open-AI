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

    static async thematiqueadd(name)
    {
        return new Promise(resolve=>
            {
                db.query("insert into thematique (name) values (?)",[name],(e,r)=>
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
    
    static async deletethematique(id)
    {
        return new Promise(resolve=>
            {
                db.query("delete from thematique where id=?",[id],(error,result)=>
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

module.exports=thematique