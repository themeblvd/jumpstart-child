const gulp = require('gulp');
const buildCss = require('./tasks/build-css');

gulp.task('build-css-dev', () => buildCss('dev'));

gulp.task('build-css-prod', () => buildCss('prod'));

gulp.task('build-img', require('./tasks/build-img'));

gulp.task('default', ['build-css-prod', 'build-img']);

gulp.task('package-theme', require('./tasks/package-theme'));
