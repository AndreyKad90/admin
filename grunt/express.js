module.exports = {
    dev: {
        options: {
            script: 'app.js',
            livereload: true,
            spawn: false //Without this option specified express won't be reloaded
        }
    }
};