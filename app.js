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
	var searchResults = lastWords.filter((person) => {
		return accents.remove(person.lastName).toLowerCase() === accents.remove(req.params.lastname).toLowerCase();
	});

	searchResults.forEach((person) => {
		if (person.translation) {
			person.sentiment = sentimentAnalyzer(person.translation);
		} else {
			person.sentiment = sentimentAnalyzer(person.lastWords);
		}
	});

	if (searchResults.length > 0) {
		res.send(searchResults);
	} else {
		res.send('No matching results were found.');
	}
	// Return error
	// Redirect if no match is found
});

// ANALYZES SENTIMENT OF LAST WORDS
function sentimentAnalyzer(words) {
	return sentiment(words);
}

app.listen(port, () => {
	console.log(`SERVER IS RUNNING ON PORT ${port}`);
});