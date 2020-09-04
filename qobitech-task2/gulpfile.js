const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleancss = require('gulp-clean-css');
// TOP LEVEL FUNCTIONS
// gulp.task - Define tasks
// gulp.src - Point to files to use
// gulp.dest - Points to folder to output
// gulp.watch - Watch files and folders for changes

// create a task 

// logs message
// gulp.task('message',function(){
//     return new Promise(function(resolve,reject) {
//         console.log('Gulp is running...');
//         resolve();
//     });
// });

// gulp.task('message',async function(){
//     console.log('Gulp is running...');
// })

gulp.task('message',function(done){
    console.log('Gulp is running...');
    done();
})


// copy all html files
gulp.task('copyhtml',async function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('copyfont',async function(){
    gulp.src('src/assets/fonts/*')
    .pipe(gulp.dest('dist/assets/fonts'));
});

gulp.task('copycss',async function(){
    gulp.src('src/assets/styles/*.css')
    .pipe(cleancss({compatibilitiy: 'ie8'}))
    .pipe(gulp.dest('dist/assets/styles'));
});

// optimize images
gulp.task('imagemin',async function(){
    gulp.src('src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'))
})

// minify js
gulp.task('minifyjs', async ()=>{
    gulp.src('src/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
})

//minify sass
// gulp.task('minifysass', async function(){
//     gulp.src('src/assets/css/*.sass')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('dist/assets/css'));
// })

// Scripts
// gulp.task('scripts',async function(){
//     gulp.src('src/js/*.js')
//     .pipe(concat('main.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'))
// })

// gulp.task('default', ['message','copyhtml','imagemin','minifysass','scripts']);

gulp.task('watch',async function(){
    gulp.watch('src/*.html',gulp.series('copyhtml'));
    gulp.watch('src/assets/images/*',gulp.series('imagemin'));
    gulp.watch('src/assets/styles/*.css',gulp.series('copycss'));
    gulp.watch('src/assets/js/*.js',gulp.series('minifyjs'));
    gulp.watch('src/assets/fonts/*',gulp.series('copyfont'));
})
