var express = require('express');
var app = express();
// var api = require('./routes/api');
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.set('port', (process.env.PORT || 3000));
app.use(morgan('dev'));


// To use body.req
app.use(bodyParser.json());

app.use('/', express.static('public'));
app.use('/bower_components', express.static('bower_components'));

app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

module.exports = app;
