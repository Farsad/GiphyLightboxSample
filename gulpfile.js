var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');

gulp.task('babelfy', function () {
    // app.js is your main JS file with all your module inclusions
    return browserify({entries: './js/main.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

/**
* Simple task compile .less files
* Concatinate all styles into style.css
* Save style.css into dist folder
**/
gulp.task('css', function() {
  return gulp.src('less/**/*.*')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});


/**
* Watch all the changes in css and js folder
* Reload browser when code changed
**/
gulp.task('watch', function() {
  gulp.watch('less/**/*.*', ['css']);
  gulp.watch('js/*.*', ['babelfy', browserSync.reload]);
});


/**
* BrowserSync setup to reloads app page
* each time browserSync.reload called in watch
* NOT IN USE
* if you want to use please run 'browserSync' before watch
* i.e. gulp.task('watch', ['browserSync'], function() {
* and browserSync.reload after css and babelfy
* i.e gulp.watch('less/*.*', ['css', browserSync.reload]);
**/
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      proxy: "localhost:9800"
    }
  });
});

gulp.task('default', ['babelfy', 'css', 'watch']);
gulp.task('build', ['babelfy', 'css', 'watch']);
