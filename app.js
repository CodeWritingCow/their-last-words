const express 		= require("express");
const app 			= express();
const bodyParser 	= require("body-parser");
const logger		= require("morgan");

const sentiment 	= require("sentiment");
const accents		= require("remove-accents");

// Loads collection of last words
const lastWords 	= require("./lastWords");

var port = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(bodyParser.json());

// HOME ROUTE
app.get("/", (req, res) => {
	res.send(lastWords);
});

// GET QUOTE BY PERSON'S LAST NAME
app.get("/lastname/:lastname", (req, res) => {
	res.send(lastWords.filter((person) => {
		return accents.remove(person.lastName).toLowerCase() === accents.remove(req.params.lastname).toLowerCase();
	}));
	// Return error
	// Redirect if no match is found
});

// ANALYZES SENTIMENT OF LAST WORDS
function sentimentAnalyzer(words) {
	return dir(words);
}

app.listen(port, () => {
	console.log(`SERVER IS RUNNING ON PORT ${port}`);
});