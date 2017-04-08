//------------------------------------------------------------------
//-------------- Load Plugins And Their Settings -------------------
const gulp = require('gulp'),
	fs = require('fs'),
	g = require('gulp-load-plugins')({
		lazy: false
	});

const htmlminOpts = {
	removeComments: true,
	collapseWhitespace: true,
	removeEmptyAttributes: false,
	collapseBooleanAttributes: true,
	removeRedundantAttributes: true
};

var destPath;
var environment;
var settings;

try {
	settings = JSON.parse(fs.readFileSync('./config.app.json', 'utf8'));
} catch (error) {
	g.util.log('MY LOG ==> ' + error);
	process.exit();
}



//----------------------------------------------------
//------------------- Util Functions -----------------
function createCSSTags(cssSources) {

	const createTag = (url) => {
		return '<link href="' + url + '" rel="stylesheet"/>';
	};

	return cssSources.map((url) => {
		return createTag(url);
	}).join('');
}

function createJSTags(jsSources) {

	const createTag = (url) => {
		return '<script src="' + url + '"></script>';
	};

	return jsSources.map((url) => {
		return createTag(url);
	}).join('');
}

//----------------------------------------------------
//------------------- JS Tasks -----------------------
gulp.task('build-js', () => {
	return gulp.src('./build/assets/project_name/bundle.js')
		.pipe(gulp.dest(destPath + '/js'));
});



//----------------------------------------------------
//------------------- CSS Tasks -----------------------
gulp.task('build-css', () => {
	return gulp.src('./build/assets/project_name/styles.css')
		.pipe(gulp.dest(destPath + '/css'));
});



//----------------------------------------------------
//------------------- HTML Tasks ---------------------
gulp.task('build-html', () => {

	const timestamp = +new Date();

	const transformJS = (filepath) => {
		return '<script src="' + filepath + '"></script>';
	};

	const transformCSS = (filepath) => {
		return '<link href="' + filepath + '" rel="stylesheet"/>';
	};

	let stream = gulp.src('./app/index.html')
		.pipe(g.htmlhint('./config.htmlhint.json'))
		.pipe(g.htmlhint.reporter());

	let cssSources, jsSources;

	if (environment === 'development') {

		cssSources = ['/assets/project_name/styles.css'];
		jsSources = ['/assets/project_name/bundle.js'];

		return stream
			.pipe(g.replace('<!-- INJECT:css -->', createCSSTags(cssSources)))
			.pipe(g.replace('<!-- INJECT:js -->', createJSTags(jsSources)))
			.pipe(gulp.dest('./build/'));

	} else {

		cssSources = [`/assets/project_name/css/styles.css?${timestamp}`];
		jsSources = [`/assets/project_name/js/bundle.js?${timestamp}`];

		return stream
			.pipe(g.replace('<!-- INJECT:css -->', createCSSTags(cssSources)))
			.pipe(g.replace('<!-- INJECT:js -->', createJSTags(jsSources)))
			.pipe(g.rename('project_name.html'))
			.pipe(g.htmlmin(htmlminOpts))
			.pipe(gulp.dest(destPath.replace('/assets/project_name', '') + '/templates'));

	}

});



//----------------------------------------------------
//------------------- Copy Assets Tasks --------------
gulp.task('copy-assets', () => {

	gulp.src('./assets/images/**/*')
		.pipe(gulp.dest(destPath + '/images/'));

	gulp.src('./app/vendor/**/*')
		.pipe(gulp.dest(destPath + '/js/vendor'));

});



//-------------------------------------------------------
//----------------- Builds Tasks ------------------------
gulp.task('build-dev', () => {

	environment = 'development';
	destPath = settings[environment].dest_path;

	g.runSequence(
		'build-html',
		'copy-assets'
	);

});

gulp.task('build-live', () => {

	environment = 'production';
	destPath = settings[environment].dest_path;

	g.runSequence(
		'build-js',
		'build-css',
		'build-html',
		'copy-assets'
	);

});