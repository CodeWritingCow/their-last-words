var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	logger		= require("morgan");

var sentiment 	= require("sentiment");

// Loads collection of last words
var lastWords 	= require("./lastWords");

var port = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(bodyParser.json());

// HOME ROUTE
app.get("/", function(req, res) {
	res.send(lastWords);
});

// GET QUOTE BY PERSON'S LAST NAME
app.get("/lastname/:lastname", function(req, res) {
	// res.send("YOU ARE LOOKING FOR " + req.params.lastname.toUpperCase() + "'S LAST WORDS!");
	res.send(lastWords.filter(function(person) {
		return person.lastName.toLowerCase() === req.params.lastname.toLowerCase();
	}));
	// Return error
	// Redirect if no match is found
});

app.listen(port, function() {
	console.log("SERVER IS RUNNING ON PORT " + port);
});