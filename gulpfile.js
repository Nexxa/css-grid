/**
 * @file CSS Grid System build with Gulp
 * @author  Nexxa <nexxa.developer@gmail.com>
 */

/*jshint strict:false*/

var fs         = require('fs'),
    gulp       = require('gulp'),
    del        = require('del'),
    less       = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCSS  = require('gulp-minify-css'),
    rename     = require('gulp-rename');

// Consts
var FILENAME = 'grid',
    SRC_DIR  = 'src/',
    DIST_DIR = 'dist/';

// Delete task
gulp.task('clean', function () {
  return del([
    DIST_DIR + '*'
  ]);
}); 

// LESS task
gulp.task('less', ['clean'], function () {
  return gulp
          .src(SRC_DIR + FILENAME + '.less')
          .pipe(less())
          .pipe(gulp.dest(DIST_DIR));
});

// Minify task
gulp.task('minify', ['less'], function () {
  return gulp
          .src(DIST_DIR + FILENAME + '.css')
          .pipe(sourcemaps.init())
          .pipe(minifyCSS({ compatibility: 'ie8' }))
          .pipe(rename(FILENAME + '.min.css'))
          .pipe(sourcemaps.write('./'))
          .pipe(gulp.dest(DIST_DIR));
});

// Update version task - all sync
gulp.task('version', function() {
  var PACKAGE_FILE = 'package.json',
      BOWER_FILE   = 'bower.json',
      opts         = { encoding: 'utf8' },
      pkg          = JSON.parse(fs.readFileSync(PACKAGE_FILE, opts)),
      bower        = JSON.parse(fs.readFileSync(BOWER_FILE, opts));
  
  bower.version = pkg.version;
  
  fs.writeFileSync(BOWER_FILE, JSON.stringify(bower, null, 2));
});

// Watcher
gulp.task('watch', function () {
  var watcher = gulp.watch(SRC_DIR + '**/*', ['less']);
  
  watcher.on('change', function(event) {  
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

// Facilities
gulp.task('build',    ['clean', 'less', 'minify']);
gulp.task('release',  ['build', 'version']);

// Default task
gulp.task('default', ['build']);
