// ------------------------------------------------------------------
// -------------- Load Plugins And Their Settings -------------------
const gulp = require('gulp');
const fs = require('fs');
const g = require('gulp-load-plugins')({ lazy: false });
const { argv } = require('yargs');

const HTML_MIN_OPTS = {
  removeComments: true,
  collapseWhitespace: true,
  removeEmptyAttributes: false,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true,
};

let settings;
let environment;

try {
  environment = argv.prod ? 'production' : 'development';
  settings = JSON.parse(fs.readFileSync('./config.app.json', 'utf8'))[environment];
  if (!settings) throw new Error('Invalid settings');
} catch (error) {
  g.util.log(`MY LOG ==> ${error.getMessage()}`);
  process.exit();
}

// ----------------------------------------------------
// ------------------- Util Functions -----------------
const createCSSTags = cssSources => {
  const createTag = url => `<link href="${url}" rel="stylesheet"/>`;
  return cssSources.map(url => createTag(url)).join('\n\t');
};

const createJSTags = jsSources => {
  const createTag = url => `<script src="${url}"></script>`;
  return jsSources.map(url => createTag(url)).join('\n\t');
};

const buildJS = () => {
  return gulp
    .src('./build/js/bundle.js', { allowEmpty: true })
    .pipe(gulp.dest(`${settings.dest_path}/js`));
};

const buildCSS = () => {
  return gulp.src('./build/css/styles.css').pipe(gulp.dest(`${settings.dest_path}/css`));
};

const buildHTML = () => {
  const timestamp = +new Date();
  const stream = gulp.src('./src/index.html');
  let jsSources;
  let cssSources;

  console.log('dede');

  if (environment === 'development') {
    cssSources = [];
    jsSources = ['/js/bundle.js'];

    return stream
      .pipe(g.replace('<!-- INJECT:js -->', createJSTags(jsSources)))
      .pipe(gulp.dest(settings.dest_path));
  }

  cssSources = [`/css/styles.css?tm=${timestamp}`];
  jsSources = [`/js/bundle.js?tm=${timestamp}`];

  return stream
    .pipe(g.replace('<!-- INJECT:css -->', createCSSTags(cssSources)))
    .pipe(g.replace('<!-- INJECT:js -->', createJSTags(jsSources)))
    .pipe(g.htmlmin(HTML_MIN_OPTS))
    .pipe(gulp.dest(settings.dest_path));
};

const buildAssets = () => {
  return gulp
    .src('./assets/images/**/*', { allowEmpty: true })
    .pipe(gulp.dest(`${settings.dest_path}/images`));
};

// ----------------------------------------------------
// ------------------- CSS Tasks ----------------------
gulp.task('build-css', buildCSS);

// ----------------------------------------------------
// ------------------- JS Tasks -----------------------
gulp.task('build-js', buildJS);

// ----------------------------------------------------
// ------------------- HTML Tasks ---------------------
gulp.task('build-html', buildHTML);

// ----------------------------------------------------
// ------------------ Build Assets Tasks --------------
gulp.task('build-assets', buildAssets);
gulp.task('build-html', buildHTML);

// ----------------------------------------------------
// ---------------------- Main Tasks ------------------
gulp.task('build', gulp.series('build-html', 'build-js', 'build-assets'));
gulp.task('default', gulp.parallel('build'));
