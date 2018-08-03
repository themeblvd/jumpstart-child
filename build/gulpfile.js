const gulp = require('gulp');
const buildCss = require('./tasks/build-css');

// Build for development.

gulp.task('build-css-dev', () => buildCss('dev'));

// Build for production.

gulp.task('build-css-prod', () => buildCss('prod'));
