// 'use strict';

const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function scripts() {
    return src([
        'app/js/jquery.js',
        'app/js/app.js'
    ])
    .pipe(concat('app.min.js')) 
    .pipe(uglify())
    .pipe(dest('app/js/'))
}

exports.browsersync = browsersync;
exports.scripts = scripts;