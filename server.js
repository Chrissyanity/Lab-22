//requires express and the javascript file with my array//
var express = require('express');
var app = express();
var detroit = require('./phrases');

//get to Public folder via express//
app.use(express.static(__dirname + '/public'));

// app.get('/detroiters', function(request, response){
//   response.send(detroit);
// });
//retrieve info and randomize the items in my array//
app.get('/detroitRandom', function(request, response) {
    response.send(detroit[Math.floor(Math.random() * detroit.length)]);
});
// app.get('/', function(request, response) {
//     response.send(detroit);
// });

//port//
var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("Example.app listening at http://localhost:%s", port)
});
