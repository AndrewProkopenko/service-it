var concat = require('gulp-concat'), 
gulp = require('gulp'); 

gulp.task('default', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});
 