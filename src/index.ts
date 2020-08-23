import bodyParser from 'body-parser';
import express from 'express';

import * as authController from './apis/users';
import * as authUtils from './utils/auth';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

router.post('/users/login', authController.login);



app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/api', router);
app.listen(port);
console.log(`Dev server listening ${port}`);
