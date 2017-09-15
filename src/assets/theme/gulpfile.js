var gulp =          require('gulp');
var concat =        require('gulp-concat');
var connect =       require('gulp-connect');
var argv =          require('yargs').argv;
var gulpif =        require('gulp-if');
var jshint =        require('gulp-jshint');
var please =        require('gulp-pleeease');
var rename =        require('gulp-rename');
var replace =       require('gulp-replace');
var sass =          require('gulp-sass');
var sassThemes =    require('gulp-sass-themes');
var uglify =        require('gulp-uglify');
var del =           require('del');
var path =          require('path');
var runSequence =   require('run-sequence').use(gulp);
var merge =         require('merge-stream');

var config =        require('./gulp/config');

var paths = {
    dist : path.join(config.folders.dist),
    assets : path.join(config.folders.dist, config.folders.assets),
    js : path.join(config.folders.dist, config.folders.assets, 'js'),
    jsConcat : path.join(config.folders.dist, config.folders.assets, 'js'),
    fonts : path.join(config.folders.dist, config.folders.assets, 'fonts'),
    css : path.join(config.folders.dist, config.folders.assets, 'css'),
    img : path.join(config.folders.dist, config.folders.assets, 'img'),
    plugins : path.join(config.folders.dist, config.folders.assets, config.folders.plugins),
    revolution : path.join(config.folders.dist, config.folders.assets, config.folders.plugins, 'revolution')
};

var themeOptions = {
    primaryColor: argv.color || config.primaryColor,
    shineColor: argv.shine || config.shine,
    headerClass: argv.header || config.headerClass,
    navbarClass: argv.navbar || config.navbarClass,
    navbarMode: argv.navbarMode || config.navbarMode
};

var targets = {
    dist : {
        environment: 'dist',
        data: {
            assets: config.folders.assets,
            primaryColor: themeOptions.primaryColor + '-' + themeOptions.shineColor,
            headerClass: themeOptions.headerClass,
            navbarClass: themeOptions.navbarClass
        },
    },
    navbar : {
        environment: 'navbar',
        data: {
            assets: config.folders.assets,
            primaryColor: themeOptions.primaryColor + '-' + themeOptions.shineColor,
            headerClass: themeOptions.headerClass,
            navbarClass: themeOptions.navbarClass + ' navbar-mode'
        },
    },
    dev : {
        environment: 'dev',
        data: {
            assets: config.folders.assets,
            primaryColor: themeOptions.primaryColor + '-' + themeOptions.shineColor,
            headerClass: themeOptions.headerClass,
            navbarClass: themeOptions.navbarClass
        },
    },
};

gulp.task('plugins', function() {
    gulp.src(config.plugins.js)
        .pipe(gulp.dest(paths.js));

    gulp.src(config.plugins.jsConcat)
        .pipe(gulpif(config.concat, concat('plugins.min.js')))
        .pipe(gulpif(config.concat, uglify()))
        .pipe(gulp.dest(paths.jsConcat));

    gulp.src(config.plugins.css)
        .pipe(gulpif(config.concat, concat('plugins.min.css')))
        .pipe(gulp.dest(paths.css));

    gulp.src(config.plugins.fonts)
        .pipe(gulp.dest(paths.fonts));

    gulp.src(config.plugins.img)
        .pipe(gulp.dest(paths.img));
});

gulp.task('revolution', function() {
    gulp.src([
        './plugins/slider-revolution/revolution/**/*',
        './plugins/slider-revolution/revolution-addons/**/*',
        './plugins/slider-revolution/assets/**/*'],
        {base: './plugins/slider-revolution/'})
        .pipe(gulp.dest(paths.revolution));
});


gulp.task('js', function() {
    gulp.src(['src/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulpif(config.compress, concat('app.min.js')))
        .pipe(gulpif(config.compress, uglify()))
        .pipe(gulp.dest(paths.js))
        .pipe(connect.reload());
});


gulp.task('themes', function(cb) {
    var out = [];
    for (var color in config.themes) {
        for (var shine in config.shines) {
            var color_light = Number(config.shines[shine]) - 100;
            var color_dark = Number(config.shines[shine]) + 100;
            out.push(gulp.src(['src/scss/_config.scss'])
                .pipe(replace('light-blue-400', 'change400'))
                .pipe(replace('light-blue-500', 'change500'))
                .pipe(replace('light-blue-600', 'change600'))
                .pipe(replace('change400', config.themes[color] + '-' + color_light.toString()))
                .pipe(replace('change500', config.themes[color] + '-' + config.shines[shine]))
                .pipe(replace('change600', config.themes[color] + '-' + color_dark.toString()))
                .pipe(replace(' !default', ''))
                .pipe(rename('_' + config.themes[color] + '-' + config.shines[shine] + '.scss'))
                .pipe(gulp.dest('src/scss/themes')));
        }
    }
    return merge(out);
});

function generateNames() {
    var result = [];
    for (var color in config.themes) {
        for (var shine in config.shines) {
            result.push('' + config.themes[color] + '-' + config.shines[shine]);
        }
    }
    return result;
}


gulp.task('scss', function () {
  gulp.src('src/scss/**/*.scss')
    .pipe(gulpif(config.allColors, sassThemes('src/scss/themes/_*.scss', generateNames())))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(config.compress, please({
        "autoprefixer": true,
        "filters": true,
        "rem": true,
        "opacity": true
    })))
    .pipe(gulpif(config.compress, rename({
        suffix: '.min',
        extname: '.css'
    })))
    //.pipe(gulpif(!config.compress, rename('style.' + config.defaultTheme + '.min.css')))
    .pipe(gulp.dest(paths.css))
    .pipe(connect.reload());
});

gulp.task('fonts', function() {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest(paths.fonts))
        .pipe(connect.reload());
});

gulp.task('clean', function() {
    return del.sync([
        paths.dist,
        'src/scss/themes/*'
    ]);
});

gulp.task('watch', function () {
    gulp.watch(['src/js/**/*'], ['js']);
    gulp.watch(['src/scss/**/*'], ['scss']);
    gulp.watch(['src/fonts/**/*'], ['fonts']);
});

gulp.task('connect', function() {
    connect.server({
        root: config.folders.dist,
        port: 8080,
        livereload: true
    });
});

gulp.task('default', function() {
    runSequence(
        ['connect']
    );
});


gulp.task('dist', function() {
    config.compress = true;
    config.environment = 'dist';
    config.allColors = true;

    config.themes = [themeOptions.primaryColor];
    config.shines = [themeOptions.shineColor];


    if(themeOptions.navbarMode) {
        config.environment = 'navbar';
    }

    runSequence(
        'clean',
        'themes',
        ['plugins', 'js', 'scss', 'fonts', 'revolution']
    );
});

gulp.task('demo', function() {
    config.allColors = true;
    config.compress = true;
    config.environment = 'demo';

    runSequence(
        'clean',
        'themes',
        ['plugins', 'js', 'scss', 'fonts', 'revolution']
    );
});

gulp.task('dev', function() {
    config.environment = 'dev';

    runSequence(
        'clean',
        ['plugins', 'js', 'scss', 'fonts', 'revolution']
    );
});

gulp.task('work', function() {
    runSequence(
        'dev',
        ['connect', 'watch']
    );
});

gulp.task('release', function() {
    config.allColors = true;
    config.compress = true;
    config.environment = 'dist';

    runSequence(
        'clean',
        'themes',
        ['plugins', 'js', 'scss', 'fonts', 'revolution']
    );
});
