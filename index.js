/*** Dependencies ***/
var express = require('express')
var bodyParser = require('body-parser')


/*** App configuration ***/
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())  // Tell Express to parse POST requests as JSON

/*** Routing points ***/
app.get('/', function (request, response) {
	response.send("I'm alive!")
})

app.post('/trigger/bitchslap', function (request, response) {
	console.log(request.body)
	var payload = {
		text: '*'+request.body.user_name+'* slaps *'+request.body.text+'* around with a large trout. :fish:',
		response_type: 'in_channel'
	}
	response.json(payload)
})


/*** Prepare and Launch server proc ***/

// Set http port defined by PORT environment variable if defined or 5000 
app.set('port', (process.env.PORT || 5000));

// Launch http proc
var server = app.listen(app.get('port'), function () {
	console.log('App running at %s, port %s', server.address().address, server.address().port)
})