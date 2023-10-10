const mysql = require('mysql')


const db = mysql.createPool(
    {
        connectionLimit: 10,
        host: 'localhost',
        user:'root',
        password:'dbzadnen123456789',
        database:'projectai_db',
    }
);

db.getConnection(()=>
{
    console.log('connect to db successfully')
})

module.exports=db;