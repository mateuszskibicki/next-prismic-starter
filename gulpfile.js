const gulp = require("gulp"),
      sass = require("gulp-sass"),
      browserSync = require("browser-sync").create(),
      reload = browserSync.reload,
      plumber = require("gulp-plumber");

const postcss = require("gulp-postcss"),
      sourceMaps = require("gulp-sourcemaps"),
      cssImport = require("postcss-import"),
      precss = require("precss"),
      autoprefixer = require("autoprefixer"),
      minify = require("cssnano");



// gulp.task('reload', function () {
//   gulp.watch("static/*").on("change", reload);
// });


gulp.task("sass", function() {

  var processors = [
    postcss,
    cssImport,
    precss,
    autoprefixer,
    minify
  ];

  return gulp
    .src("scss/main.scss")
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest("static/"));
});



gulp.task("watch-sass", function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
  // gulp.watch("static/main.css", ["reload"]);
});

gulp.task("watch", ["watch-sass"]);

gulp.task("default", ["watch"]);
