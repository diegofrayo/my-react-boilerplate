require('dotenv').config();
const gulp = require('gulp');
const fs = require('fs');
const g = require('gulp-load-plugins')({ lazy: false });
const { argv } = require('yargs');

const HTML_MIN_OPTS = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  removeComments: true,
  removeEmptyAttributes: false,
  removeRedundantAttributes: true,
};

const buildPath = process.env.BUILD_PATH;
const environment = argv.prod ? 'production' : 'development';

if (!buildPath) throw new Error('Invalid env vars values');

// ----------------------------------
// --------- Util Functions ---------
const createJSTags = jsSources => {
  const createTag = url => `<script src="${url}"></script>`;
  return jsSources.map(url => createTag(url)).join('\n\t');
};

const buildHTML = () => {
  const timestamp = Date.now();
  const stream = gulp.src('./src/index.html');
  let jsSources;

  if (environment === 'development') {
    jsSources = ['/js/bundle.js'];

    return stream
      .pipe(g.replace('<!-- INJECT:js -->', createJSTags(jsSources)))
      .pipe(gulp.dest(buildPath));
  }

  jsSources = [`/js/bundle.js?tm=${timestamp}`];

  return stream
    .pipe(g.replace('<!-- INJECT:js -->', createJSTags(jsSources)))
    .pipe(g.htmlmin(HTML_MIN_OPTS))
    .pipe(gulp.dest(buildPath));
};

const buildAssets = () => {
  gulp
    .src('./assets/images/**/*', { allowEmpty: true })
    .pipe(g.imagemin())
    .pipe(gulp.dest(`${buildPath}/images`));

  gulp.src('./assets/css/**/*', { allowEmpty: true }).pipe(gulp.dest(`${buildPath}/css`));

  return gulp
    .src('./assets/fonts/**/*', { allowEmpty: true })
    .pipe(gulp.dest(`${buildPath}/fonts`));
};

const clean = () => {
  return gulp.src('./build', { read: false, allowEmpty: true }).pipe(g.clean());
};

// -------------------------------
// --------- Build Tasks ---------
gulp.task('build-html', buildHTML);
gulp.task('build-assets', buildAssets);
gulp.task('clean', clean);

// ------------------------------
// --------- Main Tasks ---------
gulp.task('build', gulp.parallel('build-html', 'build-assets'));
gulp.task('default', gulp.parallel('build'));
