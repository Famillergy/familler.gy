'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var less = require('gulp-less');
const imagemin = require('gulp-imagemin');
let src = 'src';
let dist = 'dist';
var paths = {
  less: ['./src/less/*.less']
};

gulp.task('default', ['babel', 'less','images', 'vendor']);

gulp.task('babel', function () {
  return gulp.src(`${src}/*.js`)
      .pipe(babel())
      .pipe(gulp.dest('assets/js'));
});

gulp.task('less', function () {
  return gulp.src([
    'src/less/style.less'
  ], {base: 'src/less'})
    .pipe(less())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});



gulp.task('images', function(){
  return gulp.src('src/images/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('assets/images'))
})
gulp.task('vendor', function() {
  return gulp.src([
    'vendor/bower/bootstrap/dist/*/*'
  ], {base: 'vendor/bower'})
    .pipe(gulp.dest('assets/vendor'));
});
