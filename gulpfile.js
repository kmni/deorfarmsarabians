var gulp = require('gulp'),
    compass = require('gulp-compass'),
    watch = require('gulp-watch');

// Compass task
// ====================================

gulp.task('compass', function() {
    gulp.src('styles/**/*.scss')

        // compass kompilace
        .pipe(compass({
            config_file: 'config.rb',
            css: 'styles',
            sass: 'styles'
        }))

        // cesta pro zkompilovane soubory
        .pipe(gulp.dest('styles'));
});

// watch task
// ====================================

gulp.task('default', function() {
    gulp.watch('styles/**/*.scss', ['compass']);
});
