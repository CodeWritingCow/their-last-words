var gulp 		= require("gulp"),
	merge		= require("gulp-merge-json"),
	concat_json	= require("gulp-concat-json");


// ===========================================
// Combine quotes JSON files into one file
// ===========================================
// SOLUTION A: DOESN'T WORK AS EXPECTED. RETURNS ONLY ONE JSON FILE WITH ONE QUOTES
// gulp.task("merge", function() {
// 	return gulp.src('collection/**/*.json')
// 		.pipe(merge({
// 			fileName: "lastWords.json",
// 		}))
// 		.pipe(gulp.dest("./"));
// });

// SOLUTION B: WORKS AS EXPECTED
// Pushes objects from quotes files into array in new file
gulp.task("merge-json", function() {
	return gulp.src("collection/**/*.json")
		.pipe(concat_json("lastWords.json"))
		.pipe(gulp.dest("./"));
});