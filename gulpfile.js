/**
 * Gulpfile.js
 */

require('colors');
const path = require('path');
const gulp = require('gulp');


const ROOT = path.resolve(__dirname, './');
const src = path.join(ROOT, './src');

gulp.task('copy:depen', () => {
    gulp.src([
        `${src}/**`,
        `!${src}/js`,
        `!${src}/js/**/*`,
        `!${src}/public/js`,
        `!${src}/public/js/**/*`
    ]).pipe(gulp.dest(path.join(ROOT, './dist')));
});

gulp.task('watch:depen', ['copy:depen'], () => {
    const watcher = gulp.watch([`${src}/**`, `!${src}/js`, `!${src}/js/**/*`], ['copy:depen']);
    watcher.on('change', (event) => {
        if (event.path) {
            console.info(
                'File: ' + event.path.red, // eslint-disable-line
                'was ' + event.type.blue, // eslint-disable-line
                'running tasks...');
        }
    });
});

gulp.task('default', ['copy:depen']);
