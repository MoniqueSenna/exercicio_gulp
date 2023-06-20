const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); //importe o gulp-imagemin usando '.default' para usar como um módulo ES
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Tarefa para compilar o SASS
function compileSass() {
    return gulp
        .src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// Tarefa para comprimir as imagens
function compressImages() {
    return gulp.src('src/images/*.jpg')
        
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

// Tarefa para minificar o código JavaScript
function minifyJavaScript() {
    return gulp
        .src('src/js/*.js')
        .pipe(concat('app.js')) // Concatena todos os arquivos JavaScript em um único arquivo
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

// Tarefa padrão do Gulp que executa todas as tarefas
gulp.task('default', gulp.parallel(compileSass, compressImages, minifyJavaScript));
