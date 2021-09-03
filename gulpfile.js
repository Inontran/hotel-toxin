var gulp = require('gulp');
    gutil = require( 'gulp-util' );
    ftp = require( 'vinyl-ftp' );
    rsync = require('gulp-rsync');

gulp.task('deploy', function(){
  return gulp.src('dist/**')
    .pipe(rsync({
      root: 'dist/',
      hostname: 'bragin-alexandr.site',
      destination: '/var/www/u0856806/data/www/bragin-alexandr.site/',
      archive: true,
      silent: false,
      compress: true,
      username: 'u0856806',
    }));
});