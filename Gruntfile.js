module.exports = function(grunt) {

    grunt.initConfig({
        jshint: require("./grunt/jshint"),
        watch: require("./grunt/watch"),
        express: require("./grunt/express")
    });
    
    grunt.registerTask("default", ["jshint", "express", "watch"]);

    //ccq = check code quality
    grunt.registerTask("ccq", ["jshint"]);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

};