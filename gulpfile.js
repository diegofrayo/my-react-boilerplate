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
  settings = JSON.parse(fs.readFileSync('./config.app.json', 'utf8'));
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

const configureEnvironment = callback => {
  if (environment) return callback();

  environment = argv.prod ? 'production' : 'development';
  settings = settings[environment];

  return callback();
};

// -----------------------------------------------------
// ----------------- Builds Tasks ----------------------
gulp.task('configure-environment', configureEnvironment);

// ----------------------------------------------------
// ------------------- CSS Tasks ----------------------
gulp.task('build-css', gulp.series('configure-environment'), buildCSS);

// ----------------------------------------------------
// ------------------- JS Tasks -----------------------
gulp.task('build-js', gulp.series('configure-environment'), buildJS);

// ----------------------------------------------------
// ------------------- HTML Tasks ---------------------
gulp.task('build-html', gulp.series('configure-environment'), buildHTML);

// ----------------------------------------------------
// ------------------ Build Assets Tasks --------------
gulp.task('build-assets', gulp.series('configure-environment'), buildAssets);

gulp.task(
  'build',
  gulp.series(
    'configure-environment',
    gulp.parallel('build-html', 'build-js', 'build-assets'),
  ),
);
