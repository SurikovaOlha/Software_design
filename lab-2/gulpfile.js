const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const del = require("del");
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const named = require('vinyl-named');
const glob = require('glob');
const path = require('path');

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.(ts|js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.json$/,
        type: 'javascript/auto',
        loader: 'json-loader',
      },
    ]
  },
  resolve: {
    alias: {
      'node_modules': path.resolve(__dirname, 'node_modules'),
      '@': path.resolve(__dirname, 'src/js/'),
    },
    modules: ['node_modules']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    })
  ],
};

function html() {
  return gulp
    .src(['src/*.html'])
    .pipe(gulp.dest('./build/'));
}

function css() {
  return gulp
    .src('src/css/**/*.css'/* , { sourcemaps: true } */)
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function js() {
  const jsFilesPaths = glob.sync('./src/js/*.js');

  return gulp
    .src([...jsFilesPaths])
    .pipe(named())
    .pipe(
      webpackStream({
        ...webpackConfig,
        // entry: {...entries},
        output: {
          filename: '[name].js',
          publicPath: '/build/js/',
        }

      }, webpack, function (err, stats) {
      }))
    .pipe(gulp.dest('build/js'));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'build'
    }
  });

  gulp.watch('./src/css/**/*.css', css);
  gulp.watch('./src/js/**/*.js', gulp.series(js, reload));
  gulp.watch('./src/**/*.html', gulp.series(html, reload));
}

function reload(done) {
  browserSync.reload();
  done();
}

function clean() {
  return del(['build/*']);
}

let build = gulp.series(clean, gulp.parallel(html, css, js));

gulp.task('html', html);
gulp.task('reload', reload);
gulp.task('css', css);
gulp.task('js', js);
gulp.task('clean', clean);
gulp.task('watch', watch);
gulp.task('build', build);
gulp.task('default', gulp.series('build', 'watch'));
