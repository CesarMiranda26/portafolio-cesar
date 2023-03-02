const { src, dest, parallel } = require("gulp")

const webp = require("gulp-webp")
const avif = require("gulp-avif")
const imagemin = require("gulp-imagemin")
const cache = require("gulp-cache")

function versionWebp(done){
    const opciones = {
        quality: 50
    }

    src('img/**/*.{png, jpg}')
        .pipe(webp(opciones))
        .pipe(dest('src/img'))

    done()
}

function versionAvif(done){
    const opciones = {
        quality: 50
    }

    src('img/**/*.{png, jpg}')
        .pipe(avif(opciones))
        .pipe(dest('src/img'))

    done()
}

function img(done){
    const opciones = {
        optimizationLevel: 3
    }

    src('img/**/*.{png, jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('src/img'))

    done()
}

exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.img = parallel(versionWebp, versionAvif, img)