const express = require('express'),
  router = express.Router();
  db = require('./db');
  path = require("path");

// Static route for index.html
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// get account list
router.get('/accounts', function(req, res) {
  let sql = `SELECT * FROM account`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
    })
  });

// get account_id by username and password
router.get('/accounts/:username/:password', function(req, res) {
  const { username, password } = req.params;
  let sql = `SELECT account_id FROM account WHERE username=(?) AND password=(?)`;
  db.query(sql, [username, password], function(err, data, fields) {
    if (err) throw err;
    var [ item ] = data;
    res.json(item)
    })
  });

// get tasks by account_id
router.get('/tasks/:id', function(req, res) {
  const { id } = req.params;
  let sql = `SELECT * FROM task join calendar on task.calendar_id = calendar.calendar_id WHERE account_id=(?)`;
  db.query(sql, [id], function(err, data, fields) {
    if (err) throw err;
    var [ item ] = data;
    res.json(item)
    })
  });

// create new car
router.post('/cars', function(req, res) {
  let sql = `INSERT INTO car(make, model, year) VALUES (?)`;
  let values = [
    req.body.make,
    req.body.model,
    req.body.year    
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

// Update a car (uses a URL like localhost:8080/car/1 where 1 is id)
router.put('/cars/:id', function(req,res) {
  const { id } = req.params;
  let sql = `UPDATE car SET make = (?), model = (?), year = (?) WHERE ID=(?)`;
  let values = [
    req.body.make,
    req.body.model,
    req.body.year,
    id
  ];
  db.query(sql, values, function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

// Delete a car  (uses a URL like localhost:8080/car/1 where 1 is id)
router.delete('/cars/:id', function(req,res) {
  const { id } = req.params;
  let sql = `DELETE FROM car WHERE ID=(?)`;
  db.query(sql, [id], function(err, data, fields) {
    if (err) throw err;
    res.json(data);
  })
});

module.exports = router;
