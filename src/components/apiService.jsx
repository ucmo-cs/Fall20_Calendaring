//import express from 'express'


class ApiService {

  runQuery(q) {
    
    var mysql  = require("mysql");

    // config for your database
    var connection = mysql.createConnection({
      user: 'F20Calendar',
      password: 'F20Calendar12#$',
      server: 'mysql://www.math-cs.ucmo.edu:3306/F20Calendar', 
      database: 'F20Calendar' 
    });

    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
    
    connection.query(q, function (err, rows, fields) {
      //if (err) throw err

      console.log(rows)
    })

    connection.end()
  }
}

export default new ApiService();