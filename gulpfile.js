const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const sassPath = 'server/resource/sass/**/*.scss';
const jsPath = 'server/resource/js/**/*.js';

gulp.task('watch', function(){
  gulp.watch(sassPath, gulp.series(['sass']));
  gulp.watch(jsPath, gulp.series(['scripts']));
  // Other watchers
});

gulp.task('sass', function(){
  return gulp.src(sassPath)
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(concat('main.css'))
    .pipe(gulp.dest('public/asset/css/'))
});

// Task to concat, strip debugging and minify JS files
gulp.task('scripts', function() {
  return gulp.src(jsPath)
    .pipe(concat('main.js'))
    // .pipe(uglify())
    .on('error', function (err) { err.toString() })
    .pipe(gulp.dest('public/asset/js/'));
});

gulp.task('default', gulp.series(['scripts', 'sass']));
