module.exports = function(app) {

    app.use('/api/authentication', require('./api/authentication'));
    app.use('/api/users', require('./api/users'));

};