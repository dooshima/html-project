const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const {src, series, parallel, dest, watch} = require('gulp');

const cssPath = 'src/assets/css/**/*.css';

function CopyHtmlFile(){
    return src('src/*.html').pipe(gulp.dest('dist'));
}

function CopyImageFile(){
    return src('src/assets/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}

function CssFile(){
    return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('styles.css'))
    .pipe(postcss([autoprefixer(),cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/css'))
}
function watchTask(){
    watch([cssPath], {interval:100},parallel(CssFile));
}

exports.CopyImageFile = CopyImageFile;
exports.default = CopyHtmlFile;
exports.CssFile = CssFile;
exports.default = series(parallel(CopyHtmlFile, CopyImageFile,CssFile),watchTask);