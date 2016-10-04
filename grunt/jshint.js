module.exports = {
    options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: false,
        forin: true,
        latedef: true,
        esversion: 6
    },
    client: {
        files: {
            src: ["client/**.js"]
        }
    },
    server: {
        files: {
            src: ["server/**.js"]
        }
    },
    root: {
        files: {
            src: ["*.js", "grunt/**.js"]
        }
    }
};