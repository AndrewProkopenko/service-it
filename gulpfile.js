var concat = require('gulp-concat');
var order = require("gulp-order"); 
var gulp = require('gulp');  
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

// gulp.task('default', ['customScript', 'labsScript'])

gulp.task('script', function() {
  return gulp.src('js/*.js')
    .pipe(concat('script.js'))
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('vendor', function() {
  return gulp.src('libs/*.js')
    .pipe(order([
        "jquery-3.4.1.slim.min.js",
        "popper.min.js",
        "bootstrap.min.js",
        "selectr.min.js",
        "swiper.min.js",
    ]))
    .pipe(concat('vendor.js'))     
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))                            
    .pipe(gulp.dest('./dist/'));
});

