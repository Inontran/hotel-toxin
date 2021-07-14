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


// таск не рабочий
gulp.task('deploy-ftp', function(){
  var conn = ftp.create({
    host:     'bragin-alexandr.site',
    user:     'u0856806_2',
    password: '',
    parallel: 10,
    log:      gutil.log
  });

  var globs = [
    'dist/**',
  ];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp.src( globs, { base: '.', buffer: false } )
    .pipe( conn.newer( '/var/www/u0856806/data/www/bragin-alexandr.site/' ) ) // only upload newer files
    .pipe( conn.dest( '/var/www/u0856806/data/www/bragin-alexandr.site/' ) );
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