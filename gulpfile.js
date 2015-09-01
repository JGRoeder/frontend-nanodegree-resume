// Load the plugins
var gulp = require('gulp'),
  scss = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssmin = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  ugly = require('gulp-uglify'),
  htmlmin = require('gulp-minify-html'),
  del = require('del'),
  newer = require('gulp-newer'),
  browserify = require('browserify'),
  through2 = require('through2'),
  svgstore = require('gulp-svgstore');


//----------------------------------------------
//  Paths
//----------------------------------------------

var build_paths = {
  css: 'src/css/main.scss',
  vendorJs: 'src/js/vendor/*.*',
  js: 'src/js/**/main.js',
  images: 'src/img/**/*.*',
  views: 'src/views/*.*',
  mock: 'src/js/*.json',
  svg: 'src/icons/*.svg',
  font: 'src/font/**/*.*',
  build: 'build'
};

//----------------------------------------------
//  Utilities
//----------------------------------------------

// Clean our build directory
gulp.task('clean-build', function(cb){
  del(build_paths.build + '/*', cb);
});

//----------------------------------------------
//  Build Tasks
//----------------------------------------------

gulp.task('build-css', function(){
  return gulp.src(build_paths.css)
    .pipe(scss({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(cssmin())
    .pipe(gulp.dest(build_paths.build + '/css'));
});
gulp.task('build-vendor-js', function(){
  return gulp.src(build_paths.vendorJs)
    .pipe(gulp.dest( build_paths.build + '/js/vendor'));
});
gulp.task('build-js', function () {
  gulp.src(build_paths.js)
    .pipe(through2.obj(function (file, enc, next){
            browserify(file.path)
                .transform('brfs')
                .bundle(function(err, res){
                    // assumes file.contents is a Buffer
                    file.contents = res;
                    next(null, file);
                });
        }))
    .pipe(ugly())
    .pipe(gulp.dest('build/js'));
});
gulp.task('build-views', function(){
  return gulp.src(build_paths.views)
  .pipe(htmlmin())
    .pipe(gulp.dest(build_paths.build));
});
gulp.task('build-font', function(){
  return gulp.src(build_paths.font)
    .pipe(gulp.dest(build_paths.build + '/font'));
});
gulp.task('build-mock', function(){
  return gulp.src(build_paths.mock)
    .pipe(gulp.dest(build_paths.build + '/mock'));
});
gulp.task('build-images', function(){
  return gulp.src(build_paths.images)
    .pipe(imagemin({progresive: true}))
    .pipe(gulp.dest(build_paths.build + '/img'));
});
gulp.task('build-svg', function(){
  return gulp.src(build_paths.svg)
    .pipe(svgstore({ fileName: 'icons.svg', prefix: 'icon-'}))
    .pipe(gulp.dest(build_paths.build + '/img/icons'));
});

//----------------------------------------------
//  Watch
//----------------------------------------------

gulp.task('watch-build', function(){

  gulp.watch(build_paths.css, ['build-css']);
  gulp.watch(build_paths.js, ['build-js']);
  gulp.watch(build_paths.mock, ['build-mock']);
  //gulp.watch(build_paths.vendorJs, ['build-vendor-js']);
  gulp.watch(build_paths.index, ['build-index']);
  gulp.watch(build_paths.images, ['build-images']);
  gulp.watch(build_paths.views, ['build-views']);
  gulp.watch(build_paths.svg, ['build-svg']);

});

//----------------------------------------------
//  User Tasks
//----------------------------------------------

gulp.task('build', ['build-css', 'build-js', 'build-views', 'build-images', 'build-mock', 'build-svg']);

gulp.task('watch', ['build', 'watch-build']);
