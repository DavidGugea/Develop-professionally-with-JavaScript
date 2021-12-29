const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task  - Define tasks
    gulp.src   - Point to files to use
    gulp.dest  - Points to the folder to output
    gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', function(){
    return console.log("Gulp is running...")
});

// Copy all HTML files
gulp.task("copyHTML", function(){
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});


gulp.task('default', function(){
    return console.log("Gulp is running...")
});

// Optimize Images
gulp.task("imageMin", () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);
