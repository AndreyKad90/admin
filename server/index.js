import express from 'express';
import config from './config';

var app = express();

app.use(express.static('client'));

require('./routes')(app);

app.listen(config.port, () => {
    console.log(`Application has started and is listening on the ${config.port} port`)
});
