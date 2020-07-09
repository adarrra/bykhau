var gulp = require('gulp');
var RevAll = require('gulp-rev-all');
var del = require('del');

gulp.task('default', function () {
  del('dist/**', { force: true });
  gulp.src('.htaccess').pipe(gulp.dest('dist'));
  return gulp.src('app/**')
    .pipe(RevAll.revision({
      dontRenameFile: ['index.html', '.svg', '.png', '.jpg', '.mp4', '.ogv', '.webm'],
      dontUpdateReference: ['index.html', '.svg', '.png', '.jpg', '.mp4', '.ogv', '.webm'],
    }))
    .pipe(gulp.dest('dist'));
});