var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// var SystemJS = require('systemjs');
//
// // loads './app.js' from the current directory
// SystemJS.import('./app.js').then(function (m) {
//   console.log(m);
// });

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

var server = app.listen(process.env.PORT || 3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
