const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.static(__dirname + '/../dist'));

app.use(express.json());

app.use(morgan('dev'));

module.exports = app;