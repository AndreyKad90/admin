module.exports = function(app) {

    app.get("/test", (req, res, next) => {
        res.json("Hello world !");
    });

};