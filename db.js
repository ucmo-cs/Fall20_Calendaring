'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'www.math-cs.ucmo.edu',
    user     : 'F20Calendar',
    password : 'F20Calendar12#$',
    database : 'F20Calendar'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
