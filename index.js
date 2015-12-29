var express = require('express')
var app = express()

/*** Routing points ***/

app.get('/', function (request, response) {
	response.send("I'm alive!")
})

app.get('/trigger/bitchslap', function (request, response) {
	response.send('{ "text": "Hello there!" }')
})

/*** Prepare and Launch server proc ***/

// Set http port defined by PORT environment variable if defined or 5000 
app.set('port', (process.env.PORT || 5000));

// Launch http proc
var server = app.listen(app.get('port'), function () {
	console.log('App running at %s, port %s', server.address().address, server.address().port)
})