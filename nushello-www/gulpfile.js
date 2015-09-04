var gulp = require('gulp');
var path = require('path');
var rsync = require('gulp-rsync');
var $ = require('gulp-load-plugins')();
var del = require('del');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var argv = require('optimist').argv;
var env = 'development';

// Webpack
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');
var webpackDevServer;

// `src`, `dist` and `pub` path
var src = path.join(__dirname, 'src/');
var dist = path.join(__dirname, 'dist/');
var pub = path.join(__dirname, '../../public');

// Read the config files
var config = require('./src/config.json');

// Clean the `dist` folder
gulp.task('clean', function(callback) {
  del([ dist, pub ], { force: true }, callback);
});

// Compile the Jade templates into HTML
gulp.task('html', function() {
  return gulp.src(src + '*.jade')
    .pipe($.plumber())
    .pipe($.jade({
        pretty: true
      })
    )
    .pipe(gulp.dest(dist));
});

// Reload the webpack-dev-server by emitting `hot` event
gulp.task('reload', function() {
  setTimeout(function() {
    webpackDevServer.io.sockets.emit('hot');
  }, 1000);
});

// Watch for the file changes and run corresponding tasks
gulp.task('watch', function() {
  gulp.watch(src + '*.jade', [ 'html', 'reload' ]);
});

// Open the webpack-dev-server URL automatically for easier development
gulp.task('open', function() {
  var options = {
    url: 'http://' + webpackConfig.devServer.host + ':' + webpackConfig.devServer.port + config.APP_ROOT,
    app: 'google chrome'
  };

  return gulp.src(dist + 'index.html')
    .pipe($.open('', options));
});

// Build the src using `webpack` (config: webpack.config.js)
gulp.task('build:webpack', function(callback) {
  webpack(webpackConfig).run(function(err, stats) {
    if (err) return console.log(err);
    callback();
  });
});

// Init and run the `webpack-dev-server` (config: webpack.config.js)
gulp.task('serve', function(callback) {
  var devConfig = Object.create(webpackConfig);
  devConfig.devtool = 'eval';
  devConfig.debug = true;
  devConfig.entry.app.push('webpack-dev-server/client?http://' + devConfig.devServer.host + ':' + devConfig.devServer.port);
  devConfig.entry.app.push('webpack/hot/only-dev-server');
  devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  devConfig.plugins.push(new webpack.NoErrorsPlugin());
  devConfig.module.loaders[0].loaders.splice(0, 0, 'react-hot');

  webpackDevServer = new WebpackDevServer(webpack(devConfig), devConfig.devServer);

  if (webpackDevServer) {
    webpackDevServer
      .listen(devConfig.devServer.port, devConfig.devServer.host, function(err) {
        if (err) return console.log(err);
        runSequence('open');
        callback();
      });
  } else {
    callback();
  }
});

gulp.task('copy', function() {
  gulp.src(dist + '*.js')
    .pipe(gulp.dest(pub));
});


gulp.task('rsync', function() {
  gulp.src('dist')
    .pipe(rsync({
      root: 'dist',
      destination: 'public',
      recursive: true,
      clean: true
    }));
});

gulp.task('vendor', function() {
  gulp.src(src + 'js/vendor/*.js')
    .pipe(gulp.dest(dist));
});

gulp.task('sass', function (done) {
  gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/styles'))
    .on('end', done);
});

gulp.task('sass:watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('build', function() {
  runSequence('clean', ['build:webpack', 'html', 'sass']);
});

gulp.task('deploy', function() {
  runSequence('clean', [ 'build:webpack', 'html', 'sass'], 'rsync');
});

gulp.task('default', function() {
  runSequence('clean', 'html', 'sass', 'sass:watch', 'watch', 'serve');
});
