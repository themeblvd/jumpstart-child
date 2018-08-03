const gulp = require('gulp');
const buildCss = require('./tasks/build-css');

gulp.task('build-css-dev', () => buildCss('dev'));

gulp.task('build-css-prod', () => buildCss('prod'));

gulp.task('build-img', require('./tasks/build-img'));
