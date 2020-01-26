var connection = require("./connection.js");

var orm = {
    all: function(burgerInput, cb) {
        connection.query("SELECT * FROM " + burgerInput + ";", function(err, res) {
            if(err) throw err;
            cb(res);
        })
    },

    update: function(tableInput, condition, cb) {
        connection.query("update " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function(err,res) {
            if(err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;