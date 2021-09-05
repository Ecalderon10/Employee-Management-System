const mysql = require("mysql2");



var connection = mysql.createConnection({
    host:"localhost",
    port: 3303,
    user:"root",
    password:"password",
    database: "employee_db",
});



connection.connect(function (err){
    if (err) throw err;
    console.log("connected as id" + connection.threadId + "\n");
});



module.exports = connection;