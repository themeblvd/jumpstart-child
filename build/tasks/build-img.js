const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function buildImg() {
  gulp
    .src('../assets/src/img/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(
      imagemin({
        progressive: true,
        optimizationLevel: 3, // 0-7 low-high
        interlaced: true,
        svgoPlugins: [{ removeViewBox: false }]
      })
    )
    .pipe(gulp.dest('../assets/img'));
}

module.exports = buildImg;
