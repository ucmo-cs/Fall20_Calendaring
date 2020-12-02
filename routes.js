const express = require('express'),
  router = express.Router(),
  db = require('./db'),
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

  // get account list
router.get('/calendars/:id', function(req, res) {
  const { id } = req.params;
  let sql = `SELECT * FROM calendar WHERE account_id=(?)`;
  db.query(sql, [id], function(err, data, fields) {
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

// get tasks by account_id and date
router.get('/tasks/:id/:year/:month/:day', function(req, res) {
  const { id, year, month, day } = req.params;
  let sql = `SELECT * FROM task join calendar on task.calendar_id = calendar.calendar_id WHERE account_id=(?) AND year(date_due)=(?) AND month(date_due)=(?) AND day(date_due)=(?)`;
  db.query(sql, [id, year, month, day], function(err, data, fields) {
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

// create task
router.post('/tasks', function(req, res) {
  const id = Math.floor(Math.random() * 10000)
  let sql = `INSERT INTO task(task_id, account_id, title, description, date_due, priority) VALUES (?)`;
  let values = [
    id,
    req.body.account_id,
    req.body.calendar_id,
    req.body.title,
    req.body.description,
    req.body.date_due,
    req.body.priority
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

// share calendar
router.post('/calendars', function(req, res) {
  let sql = `INSERT INTO user_in_calendar VALUES (?)`;
  let values = [
    req.body.calendar,
    req.body.user
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

// create new account
router.post('/accounts', function(req, res) {
  const id = Math.floor(Math.random() * 10000)
  let sql = `INSERT INTO account VALUES (?)`;
  let values = [
    id,
    req.body.username,
    req.body.password,
    req.body.email
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

/****************************************************
  We kept these in to use as examples while working
*****************************************************/

// Update a car (uses a URL like localhost:8080/car/1 where 1 is id)
router.put('/cars/:id', function(req,res) {
  const { id } = req.params;
  let sql = `UPDATE car SET make = (?), model = (?), year = (?) WHERE ID=(?)`;
  let values = [
    id,
    req.username,
    req.password,
    req.email
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json(data)
  })
});

module.exports = router;
