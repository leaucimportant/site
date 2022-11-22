import gulp from 'gulp';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';

gulp.task('default', () =>
  gulp.src('src/assets/images/**/*')
    .pipe(imagemin([
      gifsicle({ interlaced: true }),
      mozjpeg({ quality: 80, progressive: true }),
      optipng({ optimizationLevel: 7 }),
      svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: true
          },
          {
            name: 'cleanupIDs',
            active: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest('src/assets/images/'))
);
