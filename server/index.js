import express from 'express';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

var app = express();

app.use(express.static('client'));

mongoose.connect(config.database.url);
mongoose.connection.once('open', function() {
    app.use(bodyParser.json());

    require('./routes')(app);

    app.listen(config.port, () => {
        console.log(`Application has started and is listening on the ${config.port} port`);
    });
});


