var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    critical = require('critical');

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
    gulp.src('./public/images/icons/svg/*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('./public/images/icons/'));
});


gulp.task('critical', function (cb) { //src: http://fourkitchens.com/blog/article/use-gulp-automate-your-critical-path-css
    critical.generate({
        base: './',
        src: 'public/home.html',
        css: ['./public/css/style.css'],
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
        dest: './public/css/critical.css',
        minify: true,
        extract: false
        //ignore: ['font-face']
    });
});