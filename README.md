# Their Last Words
A collection of people's last words. It includes people both famous and obscure.


## Contribute
Making a contribution is very easy:
- Fork the repo.
- Add a JSON file with the person's last words and brief biography. See specs below.
- Make a pull request.


## Specs
### File Name
Each person's last words are stored in a JSON file inside `collection/`. Name the JSON file like this:

**`collection/{lastname-firstname}.json:`**

If the person has a middle name, then name the file like this: **`{lastname-firstname-middlename}.json:`**

### File Structure
Use this structure for the JSON file.

```js
{
	"lastName": "",
	"firstName": "", // If person has a middle name, include it here
	"lastWords": "",
	"translation": "", // If last words are in a non-English language, include English translation
	"biography": "", // One-sentence biography
	"born": "", // YYYY-MM-DD or YYYY. If date is unknown, omit this.
	"died": "", // YYYY-MM-DD or YYYT. See note above.
	"note": "" // Circumstance of person's last words, if known
}
```
If the person's last words were in English, **`translation`** can be omitted from the file.

## Example 
**`collections/mozart-wolfgang-amadeus.json`**

```js
{
	"lastName": "Mozart",
	"firstName": "Wolfgang Amadeus",
	"lastWords": "Der Geschmack des Todes ist auf meiner Zunge, ich fühle etwas, das nicht von dieser Welt ist.",
	"translation": "The taste of death is upon my lips … I feel something, that is not of this earth.",
	"biography": "Austrian composer",
	"born": "1756-01-27",
	"died": "1791-12-05",
	"note": "Spoken on his deathbed to his sister-in-law"
}
```