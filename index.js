const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


var app = express();
var router = require('./services/router');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/api', router);

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, function(){
  console.log('listening...');
});
