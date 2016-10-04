import credentials from '../../../credentials.json';

var dbUsername = credentials.database.username;
var dbPassword = credentials.database.password;

module.exports =  {

    database: {
        url: `mongodb://${dbUsername}:${dbPassword}@ds035046.mlab.com:35046/internet-shop`,
        config: {}
    },

    port: 3000

};