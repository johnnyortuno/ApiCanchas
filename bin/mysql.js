var mysql = require("mysql");
var connection = mysql.createConnection({
   //  host: 'remotemysql.com',
   //  user: 'kZOu1CI7d6',
   //  password: 'VLqFUAP0y6',
   //  database: 'kZOu1CI7d6',
   //  port: 3306

    host: 'sql10.freemysqlhosting.net',
    user: 'sql10314644',
    password: 'LukkcD7NWH',
    database: 'sql10314644',
    port: 3306
 
 });
 connection.connect(function(error){
   if(error){
    console.log('error when connecting to db:', err);

    }else{
       console.log('Conexion correcta.');
    }
 });
 module.exports = connection;
 