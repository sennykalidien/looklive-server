var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    critical = require('critical'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('gulp-cssnano'),
    imageop = require('gulp-image-optimization');

    var svgConfig = {
        dest: '.',
        shape: {
            dimension: {
                maxWidth: 15,
                maxHeight: 15
            },
            spacing: {
                padding: 5,
            },
        },
        mode: {
            css: {
                dest: '.',
                sprite: 'icns',
                render: {
                    css: true
                },
                example: true,
                prefix: '.icn-'
            }
        }
    };


gulp.task('icons', function () {
    gulp.src('./public/assets/images/icons/svg/*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('./public/dist/images/icons/'));
});


gulp.task('critical', function (cb) { //src: http://fourkitchens.com/blog/article/use-gulp-automate-your-critical-path-css
    critical.generate({
        base: './',
        src: 'public/layout.html',
        css: ['./public/assets/css/style.css'],
        dimensions: [{
            width: 320,
            height: 480
    }, {
            width: 768,
            height: 1024
    }, {
            width: 1280,
            height: 960
    }],
        dest: './public/dist/css/critical.css',
        minify: true,
        extract: false
        //ignore: ['font-face']
    });
});


gulp.task('scripts', function() {
  return gulp.src('./public/assets/js/modules/*.js')
    .pipe(concat('app.js'))      
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/js'))
    .pipe(notify({
        message: 'Scripts task complete'
    }));    
});


gulp.task('styles', function (cb) {
    gulp.src(['./public/assets/css/*.css'])
        .pipe(concat('style.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/dist/css/'))
        .pipe(notify({
            message: 'Styles task complete'
        }));
});


gulp.task('images', function (cb) {
    gulp.src(['./public/assets/images/*.png', './public/assets/images/*.jpg', './public/assets/images/*.gif', './public/assets/images/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./public/dist/images/')).on('end', cb).on('error', cb);
});