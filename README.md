# Their Last Words
A collection of people's last words. It includes people both famous and obscure.


## Contribute
Making a contribution is very easy:
- Fork the repo.
- Add a JSON file with the person's last words and brief biography. See specs below.
- Check other pull requests to make sure you aren't submitting duplicates.
- Make a pull request.


## Specs
### File Name
Each person's last words are stored in a JSON file inside `collection/`. Name the JSON file like this:

**`collection/{lastname-firstname}.json:`**

If the person has a middle name, then name the file like this: **`{lastname-firstname-middlename}.json:`**

Some people are best known by names other than their given names. Let's use their popular names. For example, use `monroe-marilyn.json` instead of `mortenson-norma-jeane.json`; and `pope-john-paul-ii.json` rather than `wojtyła-karol-józef.json`.

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
Edge case: Marilyn Monroe's birth name was Norma Jeane Mortenson, but everybody knew her by her stage name. Let's use "Marilyn Monroe" inside the JSON file.
Another edge case: Most people know Pope John Paul II. Few know Karol Józef Wojtyła. For now, let's use Pope John Paul II in `lastName` and omit `firstName`.
Note: Please remove comments from your JSON files. JSON doesn't allow comments. The comments in the template above are for illustrative purposes only.

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