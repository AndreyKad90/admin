import express from 'express';
import * as controller from './controller';

var router = express.Router();

router.post('/create', controller.create);

module.exports = router;
