import express from 'express';
import * as controller from './controller';

var router = express.Router();

router.post('/login', controller.login);

module.exports = router;
