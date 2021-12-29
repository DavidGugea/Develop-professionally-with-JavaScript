const gulp = require("gulp");
const jshint = require("gulp-jshint");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");


gulp.task(
    "lint",
    () =>
        gulp.src("src/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
);

gulp.task(
    "scripts",
    () =>
        gulp.src("src/*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("dist/src"))
    .pipe(rename("all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/src"))
);

gulp.task(
    "watch",
    () =>
    gulp.watch("src/*.js", ["lint, scripts"])
);

gulp.task("default", ["lint", "scripts", "watch"]);