var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.json({
        name: 'Kim Gordon',
        instrument: 'Bass'
    });
});

app.get('/headers', function(request, response) {
    console.log(request.headers)
    response.json({
        headers: request.headers 
    });
});

app.get('/version', function(request, response) {
    console.log(request.httpVersionMajor + '-' + request.httpVersionMinor)
    response.json({
	version: '' + request.httpVersion,
        major: '' + request.httpVersionMajor,
        minor: '' + request.httpVersionMinor 
    });
});

app.get('/headers/:header_name', function(request, response) {
    console.log(request.path)
    response.json({
        header_name: request.path 
    });
});
app.listen(8080);
