const e = require("express");
const db =require("../config/db");
const { deletecompetence } = require("../controllers/competenceController");
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

    static async competenceadd(name)
    {
        return new Promise(resolve=>
            {
                db.query("insert into competence (name) values (?)",[name],(e,r)=>
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

    static async deletecompetence(id)
    {
        return new Promise(resolve=>
            {
                db.query("delete from competence where id=?",[id],(error,result)=>
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

    static async updatecompetence(id,name)
    {
        return new Promise(resolve=>
            {
                db.query("UPDATE competence SET name=? WHERE id=?",[name,id],(result,error)=>
                {
                    if (error) {
                        resolve(true)
                    }else
                    {
                        resolve(false);
                    }
                })
            })
    }
}

module.exports=competence