var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	logger		= require("morgan");

var sentiment 	= require("sentiment");


var port = process.env.PORT || 8080;

app.use(logger("dev"));

app.get("/", function(req, res) {
	res.send("THIS IS THEIR LAST WORDS");
});



app.listen(port, function() {
	console.log("SERVER IS RUNNING ON PORT " + port);
});