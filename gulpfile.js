var gulp = require('gulp');
    gutil = require( 'gulp-util' );
    ftp = require( 'vinyl-ftp' );
    rsync = require('gulp-rsync');
    imagemin = require('gulp-imagemin');

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


gulp.task('images', function(){
  return gulp.src('dist/img/**/*.+(png|jpg|jpeg|gif)')
    // Кэширование изображений, которые проходили через imagemin
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
    ], {
      verbose: true
    }))
    .pipe(gulp.dest('dist/img'))
});