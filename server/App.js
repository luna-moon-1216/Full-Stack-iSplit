const express = require('express');
const morgan = require('morgan');
const db = require('./db/db.js');

const app = express();

app.use(express.static(__dirname + '/../dist'));

app.use(express.json());

app.use(morgan('dev'));

app.post('/groups', (req, res) => {

  const queryString = "INSERT INTO groups (name, picture, updated_at) VALUES ($1, $2, $3)";
  const params = [req.body.name, req.body.picture, new Date()];

  db.query(queryString, params)
  .then((response) => {
    res.status(201).send('Group successfully Created')
  })
  .catch((err) => {
    res.status(400).send(err);
  })

})

module.exports = app;