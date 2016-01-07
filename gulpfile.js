var gulp    = require('gulp');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename  = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var watch   = require('gulp-watch');

gulp.task('js', function() {
  gulp.src([
      './public/bower_components/angular/angular.min.js',
      './public/bower_components/angular-route/angular-route.min.js',
      './src/javascripts/layout.js'
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('css', function() {
  gulp.src(['./src/stylesheets/all.css'])
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('html', function() {
  gulp.src(['./src/htmls/index.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/javascripts/layout.js'], ['js']);
  gulp.watch(['./src/stylesheets/all.css'], ['css']);
  gulp.watch(['./src/htmls/index.html'], ['html']);
});

gulp.task('default', [ 'js', 'css', 'html', 'watch' ]);