'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();

gulp.task('css', function () {
  return gulp.src('src/sass/app.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('static'))
    .pipe(server.stream());
});

gulp.task('server', function () {
  server.init({
    server: 'static/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('src/sass/**/*.scss', gulp.series('css'));
  gulp.watch('static/*.html').on('change', server.reload);
});

gulp.task('start', gulp.series('css', 'server'));
