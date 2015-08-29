import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import del from 'del';

import webpackDevConfig from './config/webpack.config.dev';
import webpackDevServerConfig from './config/webpackdevserver.config';
import webpackConfig from './config/webpack.config';


gulp.task('serve', ['clean', 'copy', 'webpackserver']);
gulp.task('build', ['clean', 'copy', 'webpack']);

gulp.task('webpackserver', done => {
  var compiler = webpack(webpackDevConfig);

  new WebpackDevServer(compiler, webpackDevServerConfig)
      .listen(3500, 'localhost', err => {
        if (err) return console.log(err);
      });
});

gulp.task("webpack", ['clean'], done => {
  // run webpack
  webpack(webpackConfig, (err, stats) => {
    if (stats.hasErrors()) return console.log(stats.toJson().errors.toString());
    done();
  });
});

gulp.task('clean', done => {
  del('./public/**/*', done);
});

gulp.task('copy', ['clean'], done => {
  gulp.src('./app/assets/base/**/*').pipe(gulp.dest('./public/'));
  gulp.src('./app/assets/images/**/*').pipe(gulp.dest('./public/images/'));
  done();
});
