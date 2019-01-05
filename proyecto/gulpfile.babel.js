import gulp from 'gulp'
import babel from 'gulp-babel'
import pug from 'gulp-pug'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'

//creando un servidor
const server = browserSync.create();

const postCSSPlugins = [
    cssnano({
        autoprefixer : {
            add : true
        }
    })
]

gulp.task('es6',()=>
    gulp.src('./dev/js/*.js')
    .pipe(babel( ))
)
