var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors')
const routes = require('./routes');
var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  
app.use(cors(corsOptions));

app.use('/', routes);
var server = app.listen(8081, function(){
    console.log('server started at 8081 .....');
});
