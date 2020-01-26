var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ErinMolly07",
    database:"burgers_DB"
});

connection.connect(function(err) {
    if(err)throw err;
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;