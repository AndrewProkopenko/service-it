var concat = require('gulp-concat');
var order = require("gulp-order");
// var uglify = require("gulp-uglify");
var gulp = require('gulp'); 

// var pipeline = require('readable-stream').pipeline;
 

gulp.task('default', function() {
  return gulp.src('js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./dist/'));
});


// gulp.task('default', function() {
//   return gulp.src('libs/*.js')
//     .pipe(order([
//         "jquery-3.4.1.slim.min.js",
//         "popper.min.js",
//         "bootstrap.min.js",
//         "selectr.min.js",
//         "swiper.min.js",
//     ]))
//     .pipe(concat('vendor.js'))                                 
//     .pipe(gulp.dest('./dist/'));
// });
var uglifyjs = require('uglify-js'); // can be a git checkout
                                     // or another module (such as `uglify-es` for ES6 support)
var composer = require('gulp-uglify/composer');
var pump = require('pump');
 
var minify = composer(uglifyjs, console);
 
gulp.task('compress', function (cb) {
  // the same options as described above
  var options = {};
 
  pump([
      gulp.src('dist/*.js'),
      minify(options),
      gulp.dest('./dist2/')
    ],
    cb
  );
});