module.exports = {
    express: {
        files:  [ '*/**.js'],
        tasks:  [ 'jshint', 'express' ],
        options: {
            spawn: false
        }
    }
};