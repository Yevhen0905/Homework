"use strict";

var _require = require('gulp'),
    src = _require.src,
    dest = _require.dest,
    watch = _require.watch,
    parallel = _require.parallel;

var browserSync = require('browser-sync').create();

var uglify = require('gulp-uglify-es')["default"];

var concat = require('gulp-concat');

var sass = require('gulp-sass')(require('sass'));

var autoprefixer = require('gulp-autoprefixer');

var cleanCSS = require('gulp-clean-css');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
      notify: false
    }
  });
}

function scripts() {
  return src(['app/src/js/jquery.js', 'app/src/js/app.js']).pipe(concat('app.min.js')).pipe(uglify()).pipe(dest('app/src/js/')).pipe(browserSync.stream());
}

function styles() {
  return src('app/src/style/main.scss').pipe(sass().on('error', sass.logError)).pipe(concat('main.min.css')).pipe(autoprefixer({
    overrideBrowserslist: ['last 5 versions'],
    grid: true
  })).pipe(cleanCSS({
    specialComments: 0
  })).pipe(dest('app/src/style')).pipe(browserSync.stream());
}

function startWatch() {
  watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
  watch(['app/**/*.scss'], styles);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports["default"] = parallel(scripts, styles, browsersync, startWatch);