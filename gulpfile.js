var gulp = require('gulp');
var del = require('del');

gulp.task('cleanWorkspace', () => {
    return del([
      './public'
    ]);
  });